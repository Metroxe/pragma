import {IGrid} from "./GameGrid";
import defaultGrid from "./GameGrid";

export interface IGameData {
	population: number;
	time: number;
	grid: IGrid;
}

export interface IPrice {
	pragma: number;
	people: number;
	food: number;
	metal: number;
}

const defaultGameData: IGameData = {
	population: 100,
	time: 0,
	grid: defaultGrid,
};

export default defaultGameData;
