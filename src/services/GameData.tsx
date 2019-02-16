export interface IGameData {
	population: number;
	time: number;
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
};

export default defaultGameData;