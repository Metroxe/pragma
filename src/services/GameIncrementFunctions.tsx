import {IEntityTracking, IGameData} from "./GameData";
import makeSound, {SoundEffect} from "./sound";
import {Entity} from "./GameGrid";
import {IDailySummaryInformationRowProps} from "../components/DailySummaryInformationRow";

export type IIncrementFunction = (gameData: IGameData) => Promise<IGameData>;

const images: any = {
	people: require("../../assets/images/Resource-Icons/people.png"),
	metal: require("../../assets/images/Resource-Icons/metal.png"),
	food: require("../../assets/images/Resource-Icons/food.png"),
	pragma: require("../../assets/images/Resource-Icons/pragma.png"),

	disease: require("../../assets/icons/disease.png"),
	radiation: require("../../assets/icons/radiation.png"),
	alien: require("../../assets/icons/alien.png"),
    meteor: require("../../assets/icons/meteor.png"),
};
const humanFoodCost: number = 10;

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

	while (gameData.food >= humanFoodCost) {
		gameData.food -= humanFoodCost;
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
			gameData[type + "Deduction"] = (gameData.people * 0.1);
			gameData[type] = true;
		}
	} else if (type === "alien") {
		if (gameData[Entity.WEAPON].count < 1) {
			gameData[type + "Deduction"] = (gameData.pragma * 0.1);
			gameData[type] = true;
		}
	} else if (type === "radiation") {
		if (gameData[Entity.GREENHOUSE].count < 1) {
			gameData[type + "Deduction"] = (gameData.food * 0.1);
			gameData[type] = true;
		}
	} else if (type === "meteor") {
		if (gameData[Entity.VAULT].count < 1) {
			gameData[type + "Deduction"] = (gameData.metal * 0.1);
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
	// gameData.previousDayMessage = "";

	// resources
	// people and how much food it cost
	// events

	const messages: IDailySummaryInformationRowProps[] = [];

	const previousData: IGameData = gameData.previousDay;
	let peopleGained: number;
	if ((peopleGained = gameData.people - previousData.people) > 0) {
		messages.push({
			image: images.people,
			text: "You have gained " + peopleGained + " humans by consuming " + (peopleGained * humanFoodCost) + " food",
		});
	}
	let metalGained: number;
	if ((metalGained = gameData.metal - previousData.metal) > 0) {
		messages.push({
			image: images.metal,
			text: "You have gained " + metalGained + " metal",
		});
	}
	let pragmaGained: number;
	if ((pragmaGained = gameData.pragma - previousData.pragma) > 0) {
		messages.push({
			image: images.pragma,
			text: "You have gained " + pragmaGained + " pragma",
		});
	}

	if (gameData.disease && gameData.diseaseDeduction !== null) {
		messages.push({
			image: images.disease,
			text: "Your city has been infected with a disease. You have lost " + gameData.diseaseDeduction + " humans.",
		});
		gameData.people -= gameData.diseaseDeduction;

		gameData.diseaseDeduction = null;
	}
	if (gameData.radiation && gameData.radiationDeduction !== null) {
		messages.push({
			image: images.radiation,
			text: "You have lost " + gameData.radiationDeduction + " food to a radioactive outbreak.",
		});
		gameData.food -= gameData.radiationDeduction;

		gameData.radiationDeduction = null;
	}
	if (gameData.meteor && gameData.meteorDeduction !== null) {
		messages.push({
			image: images.meteor,
			text: "A meteor has struck your city. You have lost " + gameData.meteorDeduction + " metal as a result.",
		});
		gameData.people -= gameData.meteorDeduction;

		gameData.meteorDeduction = null;
	}
	if (gameData.alien && gameData.alienDeduction !== null) {
		messages.push({
			image: images.alien,
			text: "Aliens have robbed you of " + gameData.alienDeduction + " pragma.",
		});
		gameData.people -= gameData.alienDeduction;

		gameData.alienDeduction = null;
	}

	gameData.summaryData = messages;

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
