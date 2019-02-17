import defaultGrid, {Entity, GridMode, ICoordinate, IGrid} from "./GameGrid";
import {SoundEffect} from "./sound";

export interface IGameData {
	population: number;
	time: number;
	grid: IGrid;
	gridMode: GridMode;
	buildModeObject: Entity;
	selectedTile?: ICoordinate;
	childSelection?: ICoordinate[];
	pragma: number;
	people: number;
	food: number;
	metal: number;
	disease: boolean;
	alien: boolean;
	radiation: boolean;
	meteor: boolean;
	diseaseCount: number;
	alienCount: number;
	radiationCount: number;
	meteorCount: number;
	[Entity.OBSTRUCTED]: IEntityTracking;
	[Entity.UNOBSTRUCTED]: IEntityTracking;
	[Entity.HOSPITAL]: IEntityTracking;
	[Entity.WEAPON]: IEntityTracking;
	music: SoundEffect;
}

export interface IPrice {
	pragma: number;
	people: number;
	food: number;
	metal: number;
}

export interface IEntityTracking {
	count: number;
	price: IPrice;
	size: {x: number, y: number};
}

const defaultGameData: IGameData = {
	population: 100,
	time: 0,
	grid: defaultGrid,
	gridMode: GridMode.VIEW_MODE,
	buildModeObject: Entity.WINDMILL,
	pragma: 0,
	people: 0,
	food: 0,
	metal: 0,
	disease: false,
	alien: false,
	radiation: false,
	meteor: false,
	diseaseCount: 0,
	alienCount: 0,
	radiationCount: 0,
	meteorCount: 0,
	music: undefined,
} as IGameData;

let item: any;
for (item in Entity) {
	if (!isNaN(Number(item))) {
		defaultGameData[item] = {
			count: 0,
			price: {
				pragma: 0,
				people: 0,
				food: 0,
				metal: 0,
			},
			size: {
				x: 1,
				y: 1,
			},
		} as IEntityTracking;
	}
}

export default defaultGameData;
