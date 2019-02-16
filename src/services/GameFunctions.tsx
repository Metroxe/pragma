import {IGameData} from "./GameData";
import Navigator from "./Navigator";
import * as _ from "lodash";
import gameIncrementFunctions, {IIncrementFunction} from "./GameIncrementFunctions";

export interface IGameFunctions {
	updateGameData: (gameData: IGameData) => Promise<void>;
	birth: (people: number) => Promise<void>;
	incrementTime: () => Promise<void>;
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

	async function causeDisease(): Promise<void> {
		const newGameData: IGameData = getGameDataClone();
		if (!newGameData.disease) {
			newGameData.diseaseCount += 1;
			newGameData.disease = true;
			await updateGameData(newGameData);
		}
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
	};
}

export default createGameFunctions;
