import defaultGrid, {Entity, GridMode, ICoordinate, IGrid} from "./GameGrid";
import {SoundEffect} from "./sound";

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
	individualLocations: IIndividualLocation[];
	maximumAllocatedPeople: number;
	title: string;
	description: string;
	resourceGenerator: boolean;
	entityKey: Entity;
	image?: any;
}

export interface IIndividualLocation {
	allocatedPeople: number;
	location: ICoordinate;
	entity: Entity,
}

const defaultGameData: IGameData = {
	previousDay: {},
	population: 100,
	time: 0,
	maxTime: 100,
	grid: defaultGrid,
	gridMode: GridMode.VIEW_MODE,
	buildModeObject: Entity.WINDMILL,

	pragma: 50,
	people: 10,
	food: 50,
	metal: 50,
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

// TODO make default values for random buildings. if any are missed, this loop will assign the missed buildings with default values
let item: any;
for (item in Entity) {
	if (!isNaN(Number(item))) {

		defaultGameData[item] = {
			count: 0,
			price: {
				pragma: 10,
				people: 5,
				food: 0,
				metal: 0,
			},
			size: {
				x: 1,
				y: 1,
			},
			individualLocations: [],
			maximumAllocatedPeople: 5,
			title: "Building",
			description: "Generic building description",
			entityKey: item,
			image: require("../../assets/buildings/safety_hospital.png"),
		} as IEntityTracking;
	}
}

defaultGameData[Entity.HOSPITAL] = {
	...defaultGameData[Entity.HOSPITAL],
	count: 0,
	price: {
		pragma: 60,
		people: 0,
		food: 0,
		metal: 40,
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
	entityKey: Entity.HOSPITAL,
	image: require("../../assets/buildings/safety_hospital.png"),
};

defaultGameData[Entity.WEAPON] = {
	...defaultGameData[Entity.WEAPON],
	count: 0,
	price: {
		pragma: 40,
		people: 0,
		food: 0,
		metal: 60,
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
	entityKey: Entity.WEAPON,
	image: require("../../assets/buildings/safety_weapon.png"),
};

defaultGameData[Entity.GREENHOUSE] = {
	...defaultGameData[Entity.GREENHOUSE],
	count: 0,
	price: {
		pragma: 50,
		people: 0,
		food: 0,
		metal: 50,
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
	entityKey: Entity.GREENHOUSE,
	image: require("../../assets/buildings/safety_greenhouse.png"),
};

defaultGameData[Entity.VAULT] = {
	...defaultGameData[Entity.VAULT],
	count: 0,
	price: {
		pragma: 40,
		people: 5,
		food: 0,
		metal: 20,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 0,
	title: "Vault",
	description: "A place to put your resources",
	resourceGenerator: false,
	entityKey: Entity.VAULT,
	image: require("../../assets/buildings/safety_bank.png"),
};

// TODO CHANGE THE VALUES OF THE DEFAULTS

defaultGameData[Entity.WINDMILL] = {
	...defaultGameData[Entity.WINDMILL],
	count: 0,
	price: {
		pragma: 10,
		people: 0,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 5,
	title: "Windmill",
	description: "Small energy generator",
	resourceGenerator: true,
	entityKey: Entity.WINDMILL,
	image: require("../../assets/buildings/energy_windmill.png"),
};

defaultGameData[Entity.REACTOR] = {
	count: 0,
	price: {
		pragma: 30,
		people: 10,
		food: 10,
		metal: 10,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 12,
	title: "Reactor",
	description: "Medium energy generator",
	resourceGenerator: true,
	entityKey: Entity.REACTOR,
	image: require("../../assets/buildings/energy_nuclear.png"),
};

defaultGameData[Entity.PYLON] = {
	count: 0,
	price: {
		pragma: 40,
		people: 15,
		food: 15,
		metal: 15,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 4,
	title: "Pylon",
	description: "Large energy generator",
	resourceGenerator: true,
	entityKey: Entity.PYLON,
	image: require("../../assets/buildings/energy_crystal.png"),
};

defaultGameData[Entity.TREE] = {
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
	maximumAllocatedPeople: 4,
	title: "Tree",
	description: "Small food source",
	resourceGenerator: true,
	entityKey: Entity.TREE,
	image: require("../../assets/buildings/food_tree.png"),
};

defaultGameData[Entity.ORCHARD] = {
	count: 0,
	price: {
		pragma: 60,
		people: 5,
		food: 0,
		metal: 0,
	},
	size: {
		x: 1,
		y: 1,
	},
	individualLocations: [],
	maximumAllocatedPeople: 12,
	title: "Orchard",
	description: "Medium food source",
	resourceGenerator: true,
	entityKey: Entity.ORCHARD,
	image: require("../../assets/buildings/food_orchard.png"),
};

defaultGameData[Entity.FARM] = {
	count: 0,
	price: {
		pragma: 80,
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
	title: "Farm",
	description: "Large food source",
	resourceGenerator: true,
	entityKey: Entity.FARM,
	image: require("../../assets/buildings/food_farm.png"),
};

defaultGameData[Entity.MINE] = {
	...defaultGameData[Entity.MINE],
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
	title: "Mine",
	description: "Small resource harvester",
	resourceGenerator: true,
	entityKey: Entity.MINE,
	image: require("../../assets/buildings/metal_mine.png"),
};

defaultGameData[Entity.FORGE] = {
	...defaultGameData[Entity.FORGE],
	count: 0,
	price: {
		pragma: 80,
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
	title: "Forge",
	description: "Medium resource harvester",
	resourceGenerator: true,
	entityKey: Entity.FORGE,
	image: require("../../assets/buildings/metal_smelting.png"),
};

defaultGameData[Entity.FACTORY] = {
	...defaultGameData[Entity.FACTORY],
	count: 0,
	price: {
		pragma: 120,
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
	title: "Factory",
	description: "Large resource harvester",
	resourceGenerator: true,
	entityKey: Entity.FACTORY,
	image: require("../../assets/buildings/metal_factory.png"),
};

export default defaultGameData;
