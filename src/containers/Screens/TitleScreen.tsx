import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, StyleSheet, ViewStyle} from "react-native";
import TitleScreenInitialModalContent from "../../components/ModalContent/TitleScreenInitialModalContent";

export default class TitleScreen extends Container<ITitleScreenProps, ITitleScreenState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			backgroundColor: "green",
			height: "100%",
			width: "100%",
		},
	});

	constructor(props: ITitleScreenProps) {
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
			<TitleScreenInitialModalContent/>
		);
	}

	public render(): ReactNode {
		return (
			<View style={TitleScreen.style.mainContainer}/>
		);
	}
}

export interface ITitleScreenProps extends IContainerProps {

}

export interface ITitleScreenState extends IContainerState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
