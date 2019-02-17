import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle, ImageStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";

export default class CoolYellowButton extends ButtonWrapper<ICoolYellowButtonProps, ICoolYellowButtonState> {

	public static defaultProps: ICoolYellowButtonProps = {
		text: "Replace Me!",
		bgColor: "#FBAE34",
		extraStyle: {},
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			paddingHorizontal: 20,
            paddingVertical: 10,
			borderRadius: 20,
			alignItems: "center",
			alignSelf: "center",
		},
		textStyle: {
			fontFamily: "Anchor",
			fontSize: 24,
			color: "black",
		},
	});

	constructor(props: ICoolYellowButtonProps) {
		super(props);
		this.state = {
			...this.state,
		};
	}

	public render(): ReactNode {
		return (
			<View style={[CoolYellowButton.style.mainContainer, {backgroundColor: this.props.bgColor}, this.props.extraStyle]}>
				<Text style={CoolYellowButton.style.textStyle}>
					{this.props.text}
				</Text>
			</View>
		);
	}
}

export interface ICoolYellowButtonProps extends IButtonWrapperProps {
	text: string;
	bgColor: string;
	extraStyle: ViewStyle;
}

export interface ICoolYellowButtonState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;
	textStyle: TextStyle;
}
