import TestScreen from "./Screens/TestScreen";
import Grid from "./Screens/Grid";

export interface IContainerSet {
	[key: string]: any;
}

const containerSet: IContainerSet = {
	TestScreen,
	Grid,
};

export default containerSet;
