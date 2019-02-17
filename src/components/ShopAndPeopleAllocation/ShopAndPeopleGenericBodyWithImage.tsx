import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle, ImageStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "../ButtonWrapper";

export default class ShopAndPeopleGenericBodyWithImage extends ButtonWrapper<IShopAndPeopleGenericBodyWithImageProps, IShopAndPeopleGenericBodyWithImageState> {

	public static defaultProps: IShopAndPeopleGenericBodyWithImageProps = {
		imageSrc: null,
		title: "Title",
		description: "Description",
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			padding: 10,
		},
		previewImageContainer: {
			width: "100%",
			height: 100,
		},
		currencyImageStyle: {
			height: "100%",
			maxWidth: "100%",
		},
		titleContainer: {},
		titleStyle: {
			textAlign: "center",
			fontSize: 28,
			color: "#111228",
			fontFamily: "Anchor",
		},
		descriptionContainer: {},
		descriptionStyle: {
			textAlign: "center",
			fontSize: 18,
			color: "#111228",
			fontFamily: "Anchor",

		},
	});

	constructor(props: IShopAndPeopleGenericBodyWithImageProps) {
		super(props);
		this.state = {
			...this.state,
			disabled: !props.canAfford,
		};
	}

	public render(): ReactNode {
		return (
			<View>
				<View style={ShopAndPeopleGenericBodyWithImage.style.previewImageContainer}>
					<Image
						source={this.props.imageSrc}
						style={ShopAndPeopleGenericBodyWithImage.style.currencyImageStyle}
						resizeMode={"contain"}
					/>
				</View>

				<View style={ShopAndPeopleGenericBodyWithImage.style.titleContainer}>
					<Text style={ShopAndPeopleGenericBodyWithImage.style.titleStyle}>
						{this.props.title}
					</Text>
				</View>
				<View style={ShopAndPeopleGenericBodyWithImage.style.descriptionContainer}>
					<Text style={ShopAndPeopleGenericBodyWithImage.style.descriptionStyle}>
						{this.props.description}
					</Text>
				</View>
			</View>
		);
	}
}

export interface IShopAndPeopleGenericBodyWithImageProps extends IButtonWrapperProps {
	imageSrc: any;
	title: string;
	description: string;
}

export interface IShopAndPeopleGenericBodyWithImageState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;

	previewImageContainer: ViewStyle;
	currencyImageStyle: ImageStyle;

	titleContainer: ViewStyle;
	titleStyle: TextStyle;
	descriptionContainer: ViewStyle;
	descriptionStyle: TextStyle;
}
