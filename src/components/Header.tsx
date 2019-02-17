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
		headerFlexStyle: {
			flex: 1,
			width: "100%",
			height: "100%",
			flexDirection: "row",
			justifyContent: "space-around",
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
			<View
				style={{
					...Header.style.mainContainer,
					height: Header.headerHeight,
					backgroundColor: this.props.bgColor
				}}
			>
				<Image style={Header.style.headerImageStyle} source={require("../../assets/images/header.png")}/>
				<View style={Header.style.headerFlexStyle}>
					<View/>
					<Text style={Header.style.headerTextStyle}>
						{this.props.title}
					</Text>
					<Image source={require("../../assets/images/gameIcon.png")}/>
				</View>
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
	headerFlexStyle: ViewStyle;
	headerTextStyle: TextStyle;
	headerImageStyle: ViewStyle;
}
