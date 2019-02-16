import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {
	public render(): ReactNode {
		return (
			<View>
				{/*<TabNavigator*/}
					{/*tabOptions={["test 1", "test 2", "test 3"]}*/}
					{/*currentPage={null}*/}
				{/*/>*/}
				<Text>Test Screen 1</Text>
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
