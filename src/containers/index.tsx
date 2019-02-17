import TestScreen from "./Screens/TestScreen";
import ShopScreen from "./Screens/ShopScreen";
import AllocatePeopleScreen from "./Screens/AllocatePeopleScreen";
import Grid from "./Screens/Grid";
import StartScreen from "./Screens/StartScreen";
import TitleScreen from "./Screens/TitleScreen";
import HowToPlayScreen from "./Screens/HowToPlayScreen";
import CreditsScreen from "./Screens/CreditsScreen";

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
	HowToPlayScreen,
	CreditsScreen,
};

export default containerSet;
