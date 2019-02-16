import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text, Image} from "react-native";
import {ImageOptionComponent} from "../../components/ImageOptionComponent";

import {GradientButton} from "../../components/GradientButton";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {

	protected static imageIcons: any = [
		{label: "something", image: require("/assets/vector.png")},
		{label: "something", image: require("/assets/vector.png")},
		{label: "something", image: require("/assets/vector.png")},
		];

	constructor(props: ITestScreenProps) {
		super(props);

	}

	private static test(callback: () => void): void {
		alert("this is a test");
		callback();
	}

	public render(): ReactNode {
		return (
			<View>
				<Text>Test Screen 1</Text>
				<ImageOptionComponent
					renderElement={TestScreen.imageIcons}
					onAction={TestScreen.test}
				/>
				{/*<GradientButton/>*/}
				{/*<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>*/}
				{/*<Text>{this.props.gameData.time}</Text>*/}
				{/*<Text>Test Screen 1</Text>*/}
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
