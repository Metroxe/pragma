import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";

export default class StartScreenInitialModalContent extends EnhancedComponent<IStartScreenInitialModalContentProps, IStartScreenInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		titleText: {
			textAlign: "center",
			color: "orange",
			fontSize: 25,
			fontWeight: "bold",
		},
	});

	private static modalTitle: string = "Select an option";

	constructor(props: IStartScreenInitialModalContentProps) {
		super(props);
		this.state = {
			...this.state,
		};
	}

	public render(): ReactNode {
		return (
			<View>
				<Text style={StartScreenInitialModalContent.style.titleText}>
					{StartScreenInitialModalContent.modalTitle}
				</Text>
			</View>
		);
	}
}

export interface IStartScreenInitialModalContentProps extends IEnhancedComponentsProps {

}

export interface IStartScreenInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
