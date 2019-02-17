import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";

export default class AllocatePeopleScreen extends Container<IAllocatePeopleScreenProps, IAllocatePeopleScreenState> {

	constructor(props: IAllocatePeopleScreenProps) {
		super(props);
		this.headerTitle = "Allocate";
	}

	public render(): ReactNode {
		return (
			<View style={{marginTop: 20}}>
				<Text>
					allocate people
				</Text>
			</View>
		);
	}
}

export interface IAllocatePeopleScreenProps extends IContainerProps {

}

export interface IAllocatePeopleScreenState extends IContainerState {

}
