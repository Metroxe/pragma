import {IGameData} from "./GameData";
import Navigator from "./Navigator";
import * as _ from "lodash";
import gameIncrementFunctions, {IIncrementFunction} from "./GameIncrementFunctions";

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
	function changeTechnology(technology: "hospital" | "weapon" | "greenHouse" | "safeHouse", count: number): () => Promise<void> {
		return async (): Promise<void> => {
			const newGameData: IGameData = getGameDataClone();
			if (count >= 0) {
				newGameData[technology + "Count"] += count;
			} else if (count < 0) {
				newGameData[technology + "Count"] -= count;
			}
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

	return {
		updateGameData,
		birth,
		incrementTime,
		causeDisease: createEventCause("disease"),
		causeAlien: createEventCause("alien"),
		causeRadiation: createEventCause("radiation"),
		causeMeteor: createEventCause("meteor"),
		changeHospital: changeTechnology("hospital", 1),
		changeWeapon: changeTechnology("weapon", 1),
		changeGreenHouse: changeTechnology("greenHouse", 1),
		changeSafeHouse: changeTechnology("safeHouse", 1),
	};
}

export default createGameFunctions;
