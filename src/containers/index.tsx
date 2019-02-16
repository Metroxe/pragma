import TestScreen, {TestScreen2} from "./Screens/TestScreen";
import ShopScreen from "./Screens/ShopScreen";
import AllocatePeopleScreen from "./Screens/AllocatePeopleScreen";
import Grid from "./Screens/Grid";

export interface IContainerSet {
	[key: string]: any;
}

const containerSet: IContainerSet = {
	TestScreen,
	TestScreen2,
	ShopScreen,
	AllocatePeopleScreen,
	Grid,
};

export default containerSet;
