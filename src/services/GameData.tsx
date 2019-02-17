import defaultGrid, {Entity, GridMode, ICoordinate, IGrid} from "./GameGrid";

export interface IGameData {
	previousDay: any;
	previousDayMessage: string;
	population: number;
	time: number;
	maxTime: number;
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
	[Entity.GREENHOUSE]: IEntityTracking;
	[Entity.VAULT]: IEntityTracking;
	[Entity.WINDMILL]: IEntityTracking;
	[Entity.REACTOR]: IEntityTracking;
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
	individualLocations: IIndividualLocation[];
	maximumAllocatedPeople: number;
	title: string;
	description: string;
	resourceGenerator: boolean;
}

export interface IIndividualLocation {
	allocatedPeople: number;
	location: ICoordinate;
}

const defaultGameData: IGameData = {
	previousDay: {},
	population: 100,
	time: 0,
	maxTime: 100,
	grid: defaultGrid,
	gridMode: GridMode.VIEW_MODE,
	buildModeObject: Entity.WINDMILL,

	pragma: 20,
	people: 10,
	food: 50,
	metal: 25,
	disease: false,
	alien: false,
	radiation: false,
	meteor: false,
	diseaseCount: 0,
	alienCount: 0,
	radiationCount: 0,
	meteorCount: 0,
} as IGameData;

// TODO make default values for random buildings. if any are missed, this loop will assign the missed buildings with default values
let item: any;
for (item in Entity) {
	if (!isNaN(Number(item))) {

		defaultGameData[item] = {
			count: 0,
			price: {
				pragma: 10,
				people: 5,
				food: 10,
				metal: 10,
			},
			size: {
				x: 1,
				y: 1,
			},
			individualLocations: [],
			maximumAllocatedPeople: 10,
			title: "Building",
			description: "Generic building description",

		} as IEntityTracking;
	}
}

defaultGameData[Entity.HOSPITAL] = {
	count: 0,
	price: {
		pragma: 15,
		people: 5,
		food: 10,
		metal: 10,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "Hospital",
	description: "Prevents the spread of disease",
	resourceGenerator: false,
};

defaultGameData[Entity.WEAPON] = {
	count: 0,
	price: {
		pragma: 40,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "Weapon Institute",
	description: "Defends against alien attack",
	resourceGenerator: false,
};

defaultGameData[Entity.GREENHOUSE] = {
	count: 0,
	price: {
		pragma: 10,
		people: 5,
		food: 15,
		metal: 5,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "Greenhouse",
	description: "Houses food stores",
	resourceGenerator: false,
};

defaultGameData[Entity.VAULT] = {
	count: 0,
	price: {
		pragma: 40,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "VAULT",
	description: "A place to put your resources",
	resourceGenerator: false,
};

defaultGameData[Entity.WINDMILL] = {
	count: 0,
	price: {
		pragma: 20,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "VAULT",
	description: "A place to put your resources",
	resourceGenerator: true,
};

defaultGameData[Entity.REACTOR] = {
	count: 0,
	price: {
		pragma: 30,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "VAULT",
	description: "A place to put your resources",
	resourceGenerator: true,
};

defaultGameData[Entity.PYLON] = {
	count: 0,
	price: {
		pragma: 40,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "VAULT",
	description: "A place to put your resources",
	resourceGenerator: true,
};


defaultGameData[Entity.PYLON] = {
	count: 0,
	price: {
		pragma: 40,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "VAULT",
	description: "A place to put your resources",
	resourceGenerator: true,
};



export default defaultGameData;
