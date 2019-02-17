import TestScreen from "./Screens/TestScreen";
import ShopScreen from "./Screens/ShopScreen";
import AllocatePeopleScreen from "./Screens/AllocatePeopleScreen";
import Grid from "./Screens/Grid";
import StartScreen from "./Screens/StartScreen";
import TitleScreen from "./Screens/TitleScreen";

export interface IContainerSet {
	[key: string]: any;
}

const containerSet: IContainerSet = {
	TestScreen,
	ShopScreen,
	AllocatePeopleScreen,
	Grid,
	StartScreen,
	TitleScreen,
};

export default containerSet;
