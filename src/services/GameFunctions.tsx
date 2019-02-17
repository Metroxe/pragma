import {IGameData} from "./GameData";
import Navigator from "./Navigator";
import * as _ from "lodash";
import gameIncrementFunctions, {IIncrementFunction} from "./GameIncrementFunctions";
import {Entity, GridMode, ICoordinate} from "./GameGrid";

export interface IGameFunctions {
	updateGameData: (gameData: IGameData) => Promise<void>;
	birth: (people: number) => Promise<void>;
	incrementTime: () => Promise<void>;
	causeDisease: () => Promise<void>;
	causeAlien: () => Promise<void>;
	causeRadiation: () => Promise<void>;
	causeMeteor: () => Promise<void>;
	changeHospital: () => Promise<void>;
	changeWeapon: () => Promise<void>;
	changeGreenHouse: () => Promise<void>;
	changeSafeHouse: () => Promise<void>;
	buildOnTile: () => Promise<void>;
	changeGridMode: (gridMode: GridMode) => Promise<void>;
	selectTile: (coordinate: ICoordinate) => Promise<void>;
	changeEntitySelection: (entity: Entity) => Promise<void>;
}

function createGameFunctions(navigator: Navigator): IGameFunctions {

	function getGameDataClone(): IGameData {
		return _.cloneDeep(navigator.state.gameData);
	}

	function updateGameData(gameData: IGameData): Promise<void> {
		return new Promise((resolve: () => void): void => {
			navigator.setState({
				gameData: _.assign({}, navigator.state.gameData, gameData),
			}, resolve);
		});
	}

	function createEventCause(event: "disease" | "alien" | "radiation" | "meteor"): () => Promise<void> {
		return async (): Promise<void> => {
			const newGameData: IGameData = getGameDataClone();
			if (!newGameData[event]) {
				newGameData[event + "Count"] += 1;
				newGameData[event] = true;
				await updateGameData(newGameData);
			}
		};
	}

	async function changeEntitySelection(entity: Entity): Promise<void> {
		const newGameData: IGameData = getGameDataClone();
		newGameData.buildModeObject = entity;
		await updateGameData(newGameData);
	}

	function changeTechnology(technology: "hospital" | "weapon" | "greenHouse" | "safeHouse", count: number): () => Promise<void> {
		return async (): Promise<void> => {
			const newGameData: IGameData = getGameDataClone();
			newGameData[technology + "Count"] += count;
			await updateGameData(newGameData);
		};
	}

	async function birth(newPeople: number): Promise<void> {
		const newGameDate: IGameData = getGameDataClone();
		newGameDate.population += newPeople;
		await updateGameData(newGameDate);
	}

	async function incrementTime(): Promise<void> {
		let newGameData: IGameData = getGameDataClone();
		newGameData.time += 1;
		let func: IIncrementFunction;
		for (func of gameIncrementFunctions) {
			newGameData = await func(_.cloneDeep(newGameData));
		}
		await updateGameData(newGameData);
	}

	async function changeGridMode(gridMode: GridMode): Promise<void> {
		const newGameDate: IGameData = getGameDataClone();
		newGameDate.gridMode = gridMode;
		await updateGameData(newGameDate);
	}

	async function selectTile(coordinate: ICoordinate): Promise<void> {
		const newGameData: IGameData = getGameDataClone();

		function deselectChildren(): void {
			if (newGameData.childSelection) {
				let child: ICoordinate;
				for (child of newGameData.childSelection) {
					if (!newGameData.grid[child.x][child.y].occupied) {
						newGameData.grid[child.x][child.y].isParent = true;
						newGameData.grid[child.x][child.y].parentNodeCoordinate = undefined;
					}
				}
			}
		}

		if (newGameData.selectedTile) {
			newGameData.grid[newGameData.selectedTile.x][newGameData.selectedTile.y].selected = false;
			deselectChildren();
		}

		if ((newGameData.selectedTile && newGameData.selectedTile.x === coordinate.x && newGameData.selectedTile.y === coordinate.y)
			|| newGameData.grid[coordinate.x][coordinate.y].entity !== Entity.UNOBSTRUCTED) {
			newGameData.grid[coordinate.x][coordinate.y].selected = false;
			newGameData.selectedTile = undefined;
			deselectChildren();
		} else {
			newGameData.grid[coordinate.x][coordinate.y].selected = true;
			newGameData.selectedTile = _.cloneDeep(coordinate);
		}

		if (newGameData.selectedTile && newGameData.buildModeObject !== undefined) {

			deselectChildren();
			const xSize: number = newGameData[newGameData.buildModeObject].size.x;
			const ySize: number = newGameData[newGameData.buildModeObject].size.y;

			// check for out of bounds
			if (coordinate.x + xSize > newGameData.grid.length || coordinate.y + ySize > newGameData.grid[0].length) {
				newGameData.grid[coordinate.x][coordinate.y].selected = false;
				newGameData.selectedTile = undefined;
			} else {
				newGameData.childSelection = [];
				let x: number;
				let y: number;
				for (x = 0; x < xSize; x++) {
					for (y = 0; y < ySize; y++) {
						if (x + y !== 0) {
							newGameData.grid[coordinate.x + x][coordinate.y + y].parentNodeCoordinate = _.cloneDeep(coordinate);
							newGameData.grid[coordinate.x + x][coordinate.y + y].isParent = false;
							newGameData.childSelection.push({
								x: coordinate.x + x,
								y: coordinate.y + y,
							});
						}
					}
				} 
			}
		}

		await updateGameData(newGameData);
	}

	async function buildOnTile(): Promise<void> {
		const newGameData: IGameData = getGameDataClone();
		if (newGameData.selectedTile) {
			const x: number = newGameData.selectedTile.x;
			const y: number = newGameData.selectedTile.y;
			if (newGameData.grid[x][y].occupied === false) {
				newGameData.grid[x][y].occupied = true;
				newGameData.grid[x][y].entity = newGameData.buildModeObject;
				newGameData[newGameData.buildModeObject].count ++;
				if (newGameData.childSelection) {
					let child: ICoordinate;
					for (child of newGameData.childSelection) {
						if (newGameData.grid[child.x][child.y].occupied === false) {
							newGameData.grid[child.x][child.y].occupied = true;
							newGameData.grid[child.x][child.y].entity = newGameData.buildModeObject;
						}
					}
				}
			}

			await updateGameData(newGameData);
		}
	}

	return {
		updateGameData,
		birth,
		incrementTime,
		changeGridMode,
		selectTile,
		buildOnTile,
		causeDisease: createEventCause("disease"),
		causeAlien: createEventCause("alien"),
		causeRadiation: createEventCause("radiation"),
		causeMeteor: createEventCause("meteor"),
		changeHospital: changeTechnology("hospital", 1),
		changeWeapon: changeTechnology("weapon", 1),
		changeGreenHouse: changeTechnology("greenHouse", 1),
		changeSafeHouse: changeTechnology("safeHouse", 1),
		changeEntitySelection,
	};
}

export default createGameFunctions;
