import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Dimensions, ViewStyle, TextStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";
import LinearGradient from "react-native-linear-gradient";

export default class SilverModalButton extends ButtonWrapper<ISilverModalButtonProps, ISilverModalButtonState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		extraLinearGradientStyle: {
			borderRadius: 10,
			alignItems: "center",
			justifyContent: "center",
			padding: 15,
			width: 200,
		},
		buttonTextStyle: {
			textAlign: "center",
			color: "#111228",
			fontSize: 18,
			fontWeight: "bold",
		},
	});

	constructor(props: ISilverModalButtonProps) {
		super(props);
		this.state = {
			...this.state,
		};

	}

	public render(): ReactNode {
		return (
			<LinearGradient
				colors={[
					"#d4d5d9",
					"white",
				]}
				locations={[
					0.001,
					1,
				]}
				style={SilverModalButton.style.extraLinearGradientStyle}
			>
				<Text style={SilverModalButton.style.buttonTextStyle}>
					{this.props.buttonText}
				</Text>
			</LinearGradient>
		);
	}
}

export interface ISilverModalButtonProps extends IButtonWrapperProps {
	buttonText: string;
}

export interface ISilverModalButtonState extends IButtonWrapperState {

}

interface IStyle {
	extraLinearGradientStyle: ViewStyle;
	buttonTextStyle: TextStyle;
}
