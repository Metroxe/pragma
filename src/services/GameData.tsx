export interface IGameData {
	population: number;
	time: number;
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
	disease: false,
	alien: false,
	radiation: false,
	meteor: false,
	diseaseCount: 0,
	alienCount: 0,
	radiationCount: 0,
	meteorCount: 0,
};

export default defaultGameData;
