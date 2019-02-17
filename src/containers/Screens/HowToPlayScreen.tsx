import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Dimensions, ViewStyle} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import {IAllocatePeopleScreenProps} from "./AllocatePeopleScreen";
import HowToPlayInitialModalContent from "../../components/ModalContent/HowToPlayInitialModalContent";

export default class HowToPlayScreen extends Container<IHowToPlayScreenProps, IHowToPlayScreenState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			backgroundColor: "green",
			height: "100%",
			width: "100%",
		},
	});

	constructor(props: IHowToPlayScreenProps) {
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
			<HowToPlayInitialModalContent/>
		);
	}

	public render(): ReactNode {
		return (
			<View style={HowToPlayScreen.style.mainContainer}/>
		);
	}
}

export interface IHowToPlayScreenProps extends IContainerProps {

}

export interface IHowToPlayScreenState extends IContainerState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
