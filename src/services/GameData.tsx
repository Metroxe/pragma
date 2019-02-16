import defaultGrid, {BuildModeObject, GridMode, ICoordinate, IGrid} from "./GameGrid";

export interface IGameData {
	population: number;
	time: number;
	grid: IGrid;
	gridMode: GridMode;
	buildModeObject: BuildModeObject;
	selectedTile?: ICoordinate;
	childSelection?: ICoordinate[];
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
	gridMode: GridMode.VIEW_MODE,
	buildModeObject: BuildModeObject.HOSPITAL,
};

export default defaultGameData;
