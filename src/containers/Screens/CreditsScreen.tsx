import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Dimensions, ViewStyle} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import {IAllocatePeopleScreenProps} from "./AllocatePeopleScreen";
import CreditsInitialModalContent from "../../components/ModalContent/CreditsInitialModalContent";

export default class CreditsScreen extends Container<ICreditsScreenProps, ICreditsScreenState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			backgroundColor: "green",
			height: "100%",
			width: "100%",
		},
	});

	constructor(props: ICreditsScreenProps) {
		super(props);
		this.state = {
			...this.state,
			popUpModalContent: this.createInitialModalContent(),
		};

		this.showHeader = false;
		this.showNav = false;

		this.createInitialModalContent = this.createInitialModalContent.bind(this);
	}

	private createInitialModalContent(): ReactNode {
		return (
			<CreditsInitialModalContent/>
		);
	}

	public render(): ReactNode {
		return (
			<View style={CreditsScreen.style.mainContainer}/>
		);
	}
}

export interface ICreditsScreenProps extends IContainerProps {

}

export interface ICreditsScreenState extends IContainerState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
