import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, Image, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";

export class Header extends EnhancedComponent<IHeaderProps, IHeaderState> {

	public static defaultProps: IHeaderProps = {
		title: "HEADER",
		bgColor: "#111228",
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
			// borderBottomStartRadius: 20,
			// borderBottomEndRadius: 20,
			backgroundColor: "transparent",
		},
		headerTextStyle: {
			color: "white",
			fontWeight: "bold",
			fontSize: 16,
		},
		headerImageStyle: {
			zIndex: -1,
			position: "absolute",
			top: 0,
		},
	});

	public static headerHeight: number = 60;

	public render(): ReactNode {
		return (
			<View style={{...Header.style.mainContainer, height: Header.headerHeight, backgroundColor: this.props.bgColor}}>
				<Image style={Header.style.headerImageStyle} source={require("../../assets/images/header.png")}/>
				<Text style={Header.style.headerTextStyle}>
					{this.props.title}
				</Text>
			</View>
		);
	}
}

export interface IHeaderProps extends IEnhancedComponentsProps {
	title: string;
	bgColor: string;
}

export interface IHeaderState extends IEnhancedComponentsProps {

}

interface IStyle {
	mainContainer: ViewStyle;
	headerTextStyle: TextStyle;
	headerImageStyle: ViewStyle;
}
