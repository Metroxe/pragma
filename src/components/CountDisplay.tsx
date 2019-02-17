import {ReactNode} from "react";
import * as React from "react";
import {View, Text, ViewStyle, TextStyle, StyleSheet} from "react-native";
import EnhancedComponent from "./EnhancedComponent";
import {IEnhancedComponentProps, IEnhancedComponentState} from "../../../Senketsu/app/src/Components/EnhancedComponent";

export default class CountDisplay extends EnhancedComponent<ICountDisplayProps, ICountDisplayState> {

	public static defaultProps: ICountDisplayProps = {
		count: 100,
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		countDisplay: {
			width: 45,
			height: 17,
			backgroundColor: "#FFFFFF",
			borderRadius: 45,
		},
		countDisplayText: {
			color: "#000",
			fontFamily: "Anchor",
			fontSize: 16,
			textAlign: "center",
		},
	});

	public render(): ReactNode {
		return (
			<View style={[{...this.props.style}, CountDisplay.style.countDisplay]}><Text style={[{...this.props.textStyle}, CountDisplay.style.countDisplayText]}>{this.props.count}</Text></View>
		);
	}
}

export interface ICountDisplayProps extends IEnhancedComponentProps {
	count: number;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

export interface ICountDisplayState extends IEnhancedComponentState {

}

interface IStyle {
}
