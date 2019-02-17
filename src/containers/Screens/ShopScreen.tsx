import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import {IAllocatePeopleScreenProps} from "./AllocatePeopleScreen";

export default class ShopScreen extends Container<IShopScreenProps, IShopScreenState> {

	constructor(props: IAllocatePeopleScreenProps) {
		super(props);
		this.headerTitle = "Shop";
	}

	public render(): ReactNode {
		return (
			<View style={{marginTop: 20}}>
				<Text>
					shop screen>
				</Text>
			</View>
		);
	}
}

export interface IShopScreenProps extends IContainerProps {

}

export interface IShopScreenState extends IContainerState {

}
