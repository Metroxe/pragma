export interface IGameData {
	population: number;
	time: number;
}

const defaultGameData: IGameData = {
	population: 100,
	time: 0,
};

export default defaultGameData;