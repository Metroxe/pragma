export enum Entity {
	OBSTRUCTED,
	UNOBSTRUCTED,
	HOSPITAL,
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
	const width: number = 3;
	const height: number = 3;

	let x: number;
	let y: number;
	for (x = 0; x < width; x++) {
		defaultGrid.push([]);
		for (y = 0; y < height; y++) {
			defaultGrid[x].push({
				occupied: false,
				entity: Entity.OBSTRUCTED,
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

	return defaultGrid;
}

export default createDefaultGrid();
