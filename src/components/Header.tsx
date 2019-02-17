import * as React from "react";
import {ReactNode} from "react";
import {
	Dimensions,
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle
} from "react-native";
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
			justifyContent: "flex-end",
			marginTop: 13,
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
		logoStyle: {
			height: 40,
			width: 40,
			marginRight: 20,
		},
		leftRectangle: {
			backgroundColor: "#FBAE34",
			borderRadius: 15,
			width: 137,
			height: 20,
			left: -14,
			top: -12,
			zIndex: 20,
			position: "absolute",
		},
		rightRectangle: {
			backgroundColor: "#B1336B",
			borderRadius: 15,
			width: 291,
			height: 20,
			left: 123,
			top: -12,
			zIndex: 20,
			position: "absolute",
		},
	});

	public static headerHeight: number = 60;

	public render(): ReactNode {
		return (
			<View>
				<StatusBar hidden={true} />
				<View style={Header.style.leftRectangle}/>
				<View style={Header.style.rightRectangle}/>
				<View
					style={{
						...Header.style.mainContainer,
						height: Header.headerHeight,
						backgroundColor: this.props.bgColor,
					}}
				>
					<Image style={Header.style.headerImageStyle} source={require("../../assets/images/header.png")}/>
					<View style={Header.style.headerFlexStyle}>
						<View/>
						{/*<Text style={Header.style.headerTextStyle}>*/}
							{/*{this.props.title}*/}
						{/*</Text>*/}
						<Image style={Header.style.logoStyle} source={require("../../assets/images/pragmaLogo.png")}/>
					</View>
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
	logoStyle: ViewStyle;
	leftRectangle: ViewStyle;
	rightRectangle: ViewStyle;
}
