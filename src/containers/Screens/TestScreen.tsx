import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {
	public render(): ReactNode {
		return (
			<View>
				<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>
				<Text>{this.props.gameData.time}</Text>
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
