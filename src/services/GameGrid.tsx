import * as _ from "lodash";

export enum Entity {
	OBSTRUCTED,
	UNOBSTRUCTED,
	HOSPITAL,
	WINDMILL,
	WEAPON,
}

export enum GridMode {
	VIEW_MODE,
	BUILD_MODE,
	DELETE_MODE,
}

export type IGrid = ITile[][];

export interface ICoordinate {
	x: number;
	y: number;
}

export interface ITile {
	occupied: boolean;
	parentNodeCoordinate?: ICoordinate;
	isParent: boolean;
	entity: Entity;
	gridMode: GridMode;
	coordinate: ICoordinate;
	selected: boolean;
}

function createDefaultGrid(): IGrid {
	const defaultGrid: IGrid = [];
	const width: number = 100;
	const height: number = 5;

	let x: number;
	let y: number;
	for (x = 0; x < width; x++) {
		defaultGrid.push([]);
		for (y = 0; y < height; y++) {
			defaultGrid[x].push({
				occupied: false,
				entity: Entity.UNOBSTRUCTED,
				gridMode: GridMode.VIEW_MODE,
				isParent: true,
				coordinate: {
					x,
					y,
				},
				selected: false,
			});
		}
	}

	let coordinate: ICoordinate;
	for (coordinate of obstructedArray) {
		defaultGrid[coordinate.x][coordinate.y].entity = Entity.OBSTRUCTED;
	}

	return defaultGrid;
}

const obstructedArray: ICoordinate[] = [
	{x: 2, y: 3},
	{x: 1, y: 4},
	{x: 2, y: 4},
	{x: 2, y: 2},
	{x: 3, y: 2},
	{x: 3, y: 3},
	{x: 4, y: 3},
	{x: 3, y: 4},
	{x: 4, y: 4},
	{x: 8, y: 2},
	{x: 9, y: 2},
	{x: 9, y: 1},
	{x: 9, y: 0},
	{x: 9, y: 4},
	{x: 10, y: 4},
	{x: 11, y: 4},
	{x: 12, y: 4},
	{x: 13, y: 4},
	{x: 14, y: 4},
	{x: 15, y: 3},
	{x: 15, y: 4},
	{x: 16, y: 4},
	{x: 16, y: 3},
	{x: 17, y: 4},
	{x: 18, y: 4},
	{x: 19, y: 4},
	{x: 20, y: 4},
	{x: 20, y: 3},
	{x: 21, y: 3},
];

export const buildingMap: {[key: string]: any} = {
	[Entity.HOSPITAL]: require("../../assets/windmill.png"),
	[Entity.WINDMILL]: require("../../assets/windmill.png"),
};

export default createDefaultGrid();