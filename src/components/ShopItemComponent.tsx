import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";

export default class ShopItemComponent extends ButtonWrapper<IShopItemComponentProps, IShopItemComponentState> {

	public static defaultProps: IShopItemComponentProps = {
		itemTitle: "Title",
		itemDescription: "Description",
		pragmaPrice: 0,
		metalPrice: 0,
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			padding: 10,
		},
		titleContainer: {

		},
		titleStyle: {
			textAlign: "center",
			fontSize: 28,
			color: "#111228",
		},
		descriptionContainer: {

		},
		descriptionStyle: {
			textAlign: "center",
			fontSize: 14,
			color: "#111228",
		},
		costContainer: {
			marginTop: 10,
		},
		currencyImageWithPriceContainer: {
			flexDirection: "row",
			alignItems: "center",
		},
		currencyIconContainer: {
			flex: 5,
			height: 45,
		},
		currencyCostTextContainer: {
			flex: 5,
		},
		currencyImageStyle: {
			height: "100%",
			maxWidth: "100%",
		},
		currencyCostText: {
			fontSize: 32,
			color: "#B1336B",
		},
	});

	public render(): ReactNode {
		return (
			<View style={ShopItemComponent.style.mainContainer}>
				<View style={ShopItemComponent.style.titleContainer}>
					<Text style={ShopItemComponent.style.titleStyle}>
						{this.props.itemTitle}
					</Text>
				</View>
				<View style={ShopItemComponent.style.descriptionContainer}>
					<Text style={ShopItemComponent.style.descriptionStyle}>
						{this.props.itemDescription}
					</Text>
				</View>

				<View style={ShopItemComponent.style.costContainer}>

					<View style={ShopItemComponent.style.currencyImageWithPriceContainer}>
						<View style={ShopItemComponent.style.currencyIconContainer}>
							<Image
								source={require("../../assets/images/Resource-Icons/pragma.png")}
								style={ShopItemComponent.style.currencyImageStyle}
								resizeMode={"contain"}
							/>
						</View>
						<View style={ShopItemComponent.style.currencyCostTextContainer}>
							<Text style={ShopItemComponent.style.currencyCostText}>
								{this.props.pragmaPrice}
							</Text>
						</View>
					</View>

					<View style={ShopItemComponent.style.currencyImageWithPriceContainer}>
						<View style={ShopItemComponent.style.currencyIconContainer}>
							<Image
								source={require("../../assets/images/Resource-Icons/metal.png")}
								style={ShopItemComponent.style.currencyImageStyle}
								resizeMode={"contain"}

							/>
						</View>
						<View style={ShopItemComponent.style.currencyCostTextContainer}>
							<Text style={ShopItemComponent.style.currencyCostText}>
								{this.props.metalPrice}
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export interface IShopItemComponentProps extends IButtonWrapperProps {
	itemTitle: string;
	itemDescription: string;
	pragmaPrice: number;
	metalPrice: number;
}

export interface IShopItemComponentState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;

	titleContainer: ViewStyle;
	titleStyle: TextStyle;
	descriptionContainer: ViewStyle;
	descriptionStyle: TextStyle;

	costContainer: ViewStyle;
	currencyImageWithPriceContainer: ViewStyle;
	currencyIconContainer: ViewStyle;
	currencyCostTextContainer: ViewStyle;

	currencyImageStyle: any;
	currencyCostText: TextStyle;
}
