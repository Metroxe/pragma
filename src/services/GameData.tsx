export interface IGameData {
	population: number;
	time: number;
	pragma: number;
	people: number;
	food: number;
	metal: number;
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
	pragma: 0,
	people: 0,
	food: 0,
	metal: 0,
};

export default defaultGameData;
