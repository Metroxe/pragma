enum Entity {
	OBSTRUCTED,
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
	coordinate: ICoordinate,
}

function createDefaultGrid(): IGrid {
	const defaultGrid: IGrid = [];
	const width: number = 40;
	const height: number = 40;

	let x: number;
	let y: number;
	for (y = 0; y < height; y++) {
		defaultGrid.push([]);
		for (x = 0; x < width; x++) {
			defaultGrid[y].push({
				occupied: false,
				entity: Entity.OBSTRUCTED,
				isParent: true,
				coordinate: {
					x,
					y,
				},
			});
		}
	}

	return defaultGrid;
}

export default createDefaultGrid();
