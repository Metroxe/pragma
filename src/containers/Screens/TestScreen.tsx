import Container, {IContainerProps, IContainerState} from "../Container";
import * as React from "react";
import {ReactNode} from "react";
import SilverModalButton from "../../components/SilverModalButton";
import {PopUp, PopUpPositions} from "../../components/PopUp";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import ShopItemComponent from "../../components/ShopItemComponent";
import ShopComponentList from "../../components/ShopComponentList";
import {CircularButton} from "../../components/CircularButton";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {
	protected static image1: any = require("../../../assets/icons/menu.png");
	protected static image2: any = require("../../../assets/icons/settings.png");
	protected static image3: any = require("../../../assets/icons/next.png");
	private buttonRef: SilverModalButton;
	private popUpRef: ReactNode = <PopUp position={PopUpPositions.TL} innerComponent={<ShopComponentList/>}/>;

	protected constructor(props: ITestScreenProps) {
		super(props);

		this.buttonOnClick = this.buttonOnClick.bind(this);
		this.saveButtonRef = this.saveButtonRef.bind(this);
	}

	private static test(callback: () => void): void {
		alert("this is a test");
		callback();
	}

	private buttonOnClick(callback: () => void): void {
		// console.log("button clicked");
		if (this.buttonRef) {
			// console.log(this.buttonRef.props);
			this.buttonRef.showPopUp();
		}
		callback();
	}

	private saveButtonRef(ref: SilverModalButton): void {
		this.buttonRef = ref;
	}

	public render(): ReactNode {
		return (
			<View>
				<CircularButton image={"settings"}/>
				{/*<SilverModalButton*/}
					{/*ref={this.saveButtonRef}*/}
					{/*buttonText={"click me"}*/}
					{/*onAction={this.buttonOnClick}*/}
					{/*popUp={this.popUpRef as PopUp}*/}
				{/*/>*/}
				{/*<PopUp position={PopUpPositions.BR}/>*/}
				{/*<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>*/}
				{/*<Text>{this.props.gameData.time}</Text>*/}
				{/*<Text>Test Screen 1</Text>*/}
				{/*<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>*/}
				{/*<Text>{this.props.gameData.time}</Text>*/}
				{/*<ShopComponentList/>*/}
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
