import TestScreen from "./Screens/TestScreen";
import ShopScreen from "./Screens/ShopScreen";
import AllocatePeopleScreen from "./Screens/AllocatePeopleScreen";
import Grid from "./Screens/Grid";

export interface IContainerSet {
	[key: string]: any;
}

const containerSet: IContainerSet = {
	TestScreen,
	ShopScreen,
	AllocatePeopleScreen,
	Grid,
};

export default containerSet;
