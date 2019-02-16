import TestScreen, {TestScreen2} from "./Screens/TestScreen";

export interface IContainerSet {
	[key: string]: any;
}

const containerSet: IContainerSet = {
	TestScreen,
	TestScreen2,
};

export default containerSet;
