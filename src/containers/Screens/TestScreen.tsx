import Container, {IContainerProps, IContainerState} from "../Container";
import * as React from "react";
import {ReactNode} from "react";
import SilverModalButton from "../../components/SilverModalButton";
import {PopUp, PopUpPositions} from "../../components/PopUp";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import ShopItemComponent from "../../components/ShopItemComponent";
import ShopComponentList from "../../components/ShopComponentList";

import {ImageOptionComponent} from "../../components/ImageOptionComponent";
import {SoundEffect} from "../../services/sound";
import ResourceStats from "../../components/ResourceStats";
import PeopleAllocationItemList from "../../components/ShopAndPeopleAllocation/PeopleAllocationItemList";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {

	public async componentDidMount(): Promise<void> {
		// await this.props.gameMusic[SoundEffect.WIN]();
		// await this.props.gameMusic[SoundEffect.GG]();
		// await this.props.gameMusic[SoundEffect.CLICK]();
		// await this.props.gameMusic[SoundEffect.HAMMER]();
		// await this.props.gameMusic[SoundEffect.CLICK]();
	}

	protected static image1: any = require("../../../assets/icons/menu.png");
	protected static image2: any = require("../../../assets/icons/settings.png");
	protected static image3: any = require("../../../assets/icons/next.png");

	protected constructor(props: ITestScreenProps) {
		super(props);
	}

	private static test(callback: () => void): void {
		alert("this is a test");
		callback();
	}

	public render(): ReactNode {
		return (
			<View>
				{/*<ShopComponentList/>*/}
				<ResourceStats/>
				<PeopleAllocationItemList/>
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
