import {IGameData} from "./GameData";
import makeSound, {SoundEffect} from "./sound";

export type IIncrementFunction = (gameData: IGameData) => Promise<IGameData>;

async function randomDeath(gameData: IGameData): Promise<IGameData> {
	gameData.population -= Math.floor(Math.random() * 5 + 1);
	gameData.previousDay.peopleDied = 5;
	return gameData;
}

async function resetPreviousDay(gameData: IGameData): Promise<IGameData> {
	gameData.previousDay = {};
	return gameData;
}

async function createPreviousDayMessage(gameData: IGameData): Promise<IGameData> {
	// look at gameData.previous
	gameData.previousDayMessage = "";
	return gameData;
}

async function backgroundMusic(gameData: IGameData): Promise<IGameData> {
	let music: SoundEffect;
	if (gameData.time < 11) {
			music = SoundEffect.BGSLOW;
		} else if (gameData.time >= 1 && gameData.time <= 90) {
			music = SoundEffect.BGMEDIUM;
		} else if (gameData.time > 90) {
			music = SoundEffect.BGFAST;
		}
	if (gameData.music !== music) {
			makeSound()[music]();
			gameData.music = music;
		}
	return gameData;
}

const gameIncrementFunctions: IIncrementFunction[] = [
	resetPreviousDay,
	randomDeath,
	createPreviousDayMessage,
	backgroundMusic,
];


export default gameIncrementFunctions;
