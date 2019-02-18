import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import {ReactNode} from "react";
import * as React from "react";
import {Dimensions, Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";

export default class TotalUserResourcesDisplayForShop extends EnhancedComponent<ITotalUserResourcesDisplayForShopProps, IEnhancedComponentsState> {

	public static defaultProps: ITotalUserResourcesDisplayForShopProps = {
		pragmaRemaining: 666,
		metalRemaining: 999,
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			paddingVertical: 15,
			paddingHorizontal: 5,
		},
		innerContentContainer: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			marginBottom: 20,
		},

		imageWithValueContainer: {
			height: 70,
			flex: 1,
		},

		textContainer: {
			alignSelf: "center",
			paddingVertical: 10,
		},

		resourceLeftText: {
			fontSize: 28,
			color: "black",
			fontFamily: "Anchor",
		},

		decorationLine: {
			width: "95%",
			alignSelf: "center",
			backgroundColor: "#111228",
			height: 1,
			marginTop: 30,
		},
	});

	constructor(props: ITotalUserResourcesDisplayForShopProps) {
		super(props);
	}

	public render(): ReactNode {

		return (
			<View style={TotalUserResourcesDisplayForShop.style.mainContainer}>

				<View style={TotalUserResourcesDisplayForShop.style.innerContentContainer}>

					<View style={TotalUserResourcesDisplayForShop.style.imageWithValueContainer}>
						{/*<View>*/}
						<Image
							source={require("../../../assets/images/Resource-Icons/pragma.png")}
							style={{height: "100%", maxWidth: "100%"}}
							resizeMode={"contain"}
						/>
						{/*</View>*/}
						<View style={TotalUserResourcesDisplayForShop.style.textContainer}>
							<Text style={TotalUserResourcesDisplayForShop.style.resourceLeftText}>
								{this.props.pragmaRemaining}
							</Text>
						</View>
					</View>

					<View style={TotalUserResourcesDisplayForShop.style.imageWithValueContainer}>
						{/*<View>*/}
						<Image
							source={require("../../../assets/images/Resource-Icons/metal.png")}
							style={{height: "100%", maxWidth: "100%"}}
							resizeMode={"contain"}
						/>
						{/*</View>*/}
						<View style={TotalUserResourcesDisplayForShop.style.textContainer}>
							<Text style={TotalUserResourcesDisplayForShop.style.resourceLeftText}>
								{this.props.metalRemaining}
							</Text>
						</View>
					</View>

				</View>

				<View style={TotalUserResourcesDisplayForShop.style.decorationLine}/>
			</View>
		);
	}
}

export interface ITotalUserResourcesDisplayForShopProps extends IEnhancedComponentsProps {
	pragmaRemaining: number;
	metalRemaining: number;
}

export interface ITotalUserResourcesDisplayForShopState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	innerContentContainer: ViewStyle;
	imageWithValueContainer: ViewStyle;
	textContainer: ViewStyle;
	resourceLeftText: TextStyle;

	decorationLine: ViewStyle;
}
