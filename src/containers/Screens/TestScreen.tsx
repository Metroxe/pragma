import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import ShopItemComponent from "../../components/ShopItemComponent";
import ShopComponentList from "../../components/ShopComponentList";
import {View, Text, Image} from "react-native";
import {ImageOptionComponent} from "../../components/ImageOptionComponent";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {

	protected static image1: any = require("../../../assets/icons/menu.png");
	protected static image2: any = require("../../../assets/icons/settings.png");
	protected static image3: any = require("../../../assets/icons/vector.png");

	constructor(props: ITestScreenProps) {
		super(props);

	}

	private static test(callback: () => void): void {
		alert("this is a test");
		callback();
	}

	public render(): ReactNode {
			{/*<View style={{display: "flex", flexDirection: "row", marginLeft: "5%", marginRight: "5%"}}>*/}
				{/*<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>*/}
				{/*<ImageOptionComponent*/}
					{/*renderElement={[{image: TestScreen.image1}]}*/}
					{/*onAction={TestScreen.test}*/}
				{/*/>*/}
				{/*</View>*/}
				{/*<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>*/}
				{/*<ImageOptionComponent*/}
					{/*renderElement={[{image: TestScreen.image2}]}*/}
					{/*onAction={TestScreen.test}*/}
				{/*/>*/}
				{/*</View>*/}
				{/*<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>*/}
					{/*<ImageOptionComponent*/}
						{/*renderElement={[{image: TestScreen.image3}]}*/}
						{/*onAction={TestScreen.test}*/}
					{/*/>*/}
				{/*</View>*/}
			{/*</View>*/}
		return (
			<View>
				{/*<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>*/}
				{/*<Text>{this.props.gameData.time}</Text>*/}
				<ShopComponentList/>
			</View>

		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
