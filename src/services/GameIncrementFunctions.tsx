import {IGameData} from "./GameData";

export type IIncrementFunction = (gameData: IGameData) => Promise<IGameData>;

async function randomDeath(gameData: IGameData): Promise<IGameData> {
	gameData.population -= Math.floor(Math.random() * 5 + 1);
	return gameData;
}

const gameIncrementFunctions: IIncrementFunction[] = [
	randomDeath,
];

export default gameIncrementFunctions;
