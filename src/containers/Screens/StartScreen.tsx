import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Dimensions, ViewStyle} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";
import {IAllocatePeopleScreenProps} from "./AllocatePeopleScreen";
import StartScreenInitialModalContent from "../../components/ModalContent/StartScreenInitialModalContent";

export default class StartScreen extends Container<IStartScreenProps, IStartScreenState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			backgroundColor: "green",
			height: "100%",
			width: "100%",
		},
	});

	constructor(props: IStartScreenProps) {
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
			<StartScreenInitialModalContent/>
		);
	}

	public render(): ReactNode {
		return (
			<View style={StartScreen.style.mainContainer}/>
		);
	}
}

export interface IStartScreenProps extends IContainerProps {

}

export interface IStartScreenState extends IContainerState {

}

interface IStyle {
    mainContainer: ViewStyle;
}
