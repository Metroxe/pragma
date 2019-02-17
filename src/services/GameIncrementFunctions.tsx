import {IEntityTracking, IGameData} from "./GameData";
import makeSound, {SoundEffect} from "./sound";
import {Entity} from "./GameGrid";

export type IIncrementFunction = (gameData: IGameData) => Promise<IGameData>;

async function randomDeath(gameData: IGameData): Promise<IGameData> {
	gameData.population -= Math.floor(Math.random() * 5 + 1);
	gameData.previousDay.peopleDied = 5;
	return gameData;
}

async function pragmaGeneration(gameData: IGameData): Promise<IGameData> {
	let tempNumberOfPeople: number = 0;
	// pragma += Entity.windmill.people * 2 + Entity.A2.people * 5 + Entity.A3.people *7
	let i: number = 0;
	for (i = 0; i < gameData[Entity.WINDMILL].count; i++) {
		const peopleCount: number = gameData[Entity.WINDMILL].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.pragma += tempNumberOfPeople * gameData[Entity.WINDMILL].pragmaOutput;
	for (i = 0; i < gameData[Entity.REACTOR].count; i++) {
		const peopleCount: number = gameData[Entity.REACTOR].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.pragma += tempNumberOfPeople * gameData[Entity.REACTOR].pragmaOutput;
	for (i = 0; i < gameData[Entity.PYLON].count; i++) {
		const peopleCount: number = gameData[Entity.PYLON].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.pragma += tempNumberOfPeople * gameData[Entity.PYLON].pragmaOutput;

	return gameData;
}

async function peopleGeneration(gameData: IGameData): Promise<IGameData> {
	let tempNumberOfPeople: number = 0;
	// pragma += Entity.windmill.people * 2 + Entity.A2.people * 5 + Entity.A3.people *7
	let i: number = 0;
	for (i = 0; i < gameData[Entity.TREE].count; i++) {
		const peopleCount: number = gameData[Entity.TREE].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.food += tempNumberOfPeople * gameData[Entity.TREE].outputMultiplier;
	for (i = 0; i < gameData[Entity.ORCHARD].count; i++) {
		const peopleCount: number = gameData[Entity.ORCHARD].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.food += tempNumberOfPeople * gameData[Entity.ORCHARD].outputMultiplier;
	for (i = 0; i < gameData[Entity.FARM].count; i++) {
		const peopleCount: number = gameData[Entity.FARM].individualLocations[i].allocatedPeople;
		tempNumberOfPeople += peopleCount;
	}
	gameData.food += tempNumberOfPeople * gameData[Entity.FARM].outputMultiplier;

	while (gameData.food >= 10) {
		gameData.food -= 10;
		gameData.people += 1;
	}

	return gameData;
}

async function metalGeneration(gameData: IGameData): Promise<IGameData> {
	let tempNumberOfMetal: number = 0;
	// pragma += Entity.windmill.people * 2 + Entity.A2.people * 5 + Entity.A3.people *7
	let i: number = 0;
	for (i = 0; i < gameData[Entity.MINE].count; i++) {
		const metalCount: number = gameData[Entity.MINE].individualLocations[i].allocatedPeople;
		tempNumberOfMetal += metalCount;
	}
	gameData.metal += tempNumberOfMetal * gameData[Entity.MINE].outputMultiplier;
	for (i = 0; i < gameData[Entity.FORGE].count; i++) {
		const metalCount: number = gameData[Entity.FORGE].individualLocations[i].allocatedPeople;
		tempNumberOfMetal += metalCount;
	}
	gameData.metal += tempNumberOfMetal * gameData[Entity.FORGE].outputMultiplier;
	for (i = 0; i < gameData[Entity.FACTORY].count; i++) {
		const metalCount: number = gameData[Entity.FACTORY].individualLocations[i].allocatedPeople;
		tempNumberOfMetal += metalCount;
	}
	gameData.metal += tempNumberOfMetal * gameData[Entity.FACTORY].outputMultiplier;

	return gameData;
}

async function eventGeneration(gameData: IGameData): Promise<IGameData> {
	const time: number = gameData.time;

	if (time > 11) {
		const rand: number = Math.random() * 100;
		if (rand % 20 === 0) {

			const randEvent: number = Math.random() * 4;
			let eventType: string = null;
			switch(randEvent) {
				case 1:
					eventType = "disease";
					break;
				case 2:
					eventType = "alien";
					break;
				case 3:
					eventType = "radiation";
					break;
				case 4:
					eventType = "meteor";
					break;
			}

			if (gameData[eventType] !== true) {
				handleEvent(eventType, gameData);
			}
		}
	}
}

function handleEvent(type: string, gameData: IGameData): void {
	if (type === "disease") {
		if (gameData[Entity.HOSPITAL].count < 1) {
			gameData.people -= (gameData.people * 0.1);
			gameData[type] = true;
		}
	} else if (type === "alien") {
		if (gameData[Entity.WEAPON].count < 1) {
			gameData.pragma -= (gameData.pragma * 0.1);
			gameData[type] = true;
		}
	} else if (type === "radiation") {
		if (gameData[Entity.GREENHOUSE].count < 1) {
			gameData.food -= (gameData.food * 0.1);
			gameData[type] = true;
		}
	} else if (type === "meteor") {
		if (gameData[Entity.VAULT].count < 1) {
			gameData.metal -= (gameData.metal * 0.1);
			gameData[type] = true;
		}
	}
}

async function resetPreviousDay(gameData: IGameData): Promise<IGameData> {
	gameData.previousDay = gameData;
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
	pragmaGeneration,
	peopleGeneration,
	metalGeneration,
	eventGeneration,
	createPreviousDayMessage,
	backgroundMusic,
];


export default gameIncrementFunctions;
