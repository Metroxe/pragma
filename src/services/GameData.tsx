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
	hospitalCount: number;
	weaponCount: number;
	greenHouseCount: number;
	safeHouseCount: number;
	hospitalPrice: IPrice;
	weaponPrice: IPrice;
	greenHousePrice: IPrice;
	safeHousePrice: IPrice;
	windmillPrice: IPrice;
	nuclearPrice: IPrice;
	crystalPrice: IPrice;
	AppleTreePrice: IPrice;
	AppleFieldPrice: IPrice;
	AppleFarmPrice: IPrice;
	MinePrice: IPrice;
	SmeltingPrice: IPrice;
	FactoryPrice: IPrice;
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
	hospitalCount: 0,
	weaponCount: 0,
	greenHouseCount: 0,
	safeHouseCount: 0,
	hospitalPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	weaponPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	greenHousePrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	safeHousePrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	windmillPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	nuclearPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	crystalPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	AppleTreePrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	AppleFieldPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	AppleFarmPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	MinePrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	SmeltingPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
	FactoryPrice: {
		pragma: 0,
		people: 0,
		food: 0,
		metal: 0,
	},
};

export default defaultGameData;
