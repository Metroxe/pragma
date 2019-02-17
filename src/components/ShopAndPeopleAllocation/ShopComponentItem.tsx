import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle, ImageStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "../ButtonWrapper";
import ShopAndPeopleGenericBodyWithImage from "./ShopAndPeopleGenericBodyWithImage";

export default class ShopComponentItem extends ButtonWrapper<IShopComponentItemProps, IShopComponentItemState> {

	public static defaultProps: IShopComponentItemProps = {
		itemTitle: "Shop Title",
		itemDescription: "Shop Description",
		pragmaPrice: 69,
		metalPrice: 420,
		canAfford: true,
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			padding: 10,
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
			alignItems: "center",
			justifyContent: "center",
		},
		currencyCostTextContainer: {
			flex: 5,
			alignItems: "flex-end",
			justifyContent: "center",
		},
		currencyImageStyle: {
			height: "100%",
			maxWidth: "100%",
		},
		currencyCostText: {
			fontSize: 32,
			color: "#B1336B",
			fontFamily: "Anchor",
		},
		decorationLine: {
			width: "95%",
			alignSelf: "center",
			backgroundColor: "#111228",
			height: 1,
			marginTop: 20,
		},
	});

	constructor(props: IShopComponentItemProps) {
		super(props);
		this.state = {
			...this.state,
			disabled: !props.canAfford,
		};
	}

	public render(): ReactNode {
		return (
			<View style={{...ShopComponentItem.style.mainContainer, opacity: this.props.canAfford ? 1 : 0.3}}>

				<ShopAndPeopleGenericBodyWithImage
					title={this.props.itemTitle}
					description={this.props.itemDescription}
					imageSrc={require("../../../assets/images/Resource-Icons/pragma.png")}
				/>

				<View style={ShopComponentItem.style.costContainer}>

					<View style={ShopComponentItem.style.currencyImageWithPriceContainer}>
						<View style={ShopComponentItem.style.currencyIconContainer}>
							<Image
								source={require("../../../assets/images/Resource-Icons/pragma.png")}
								style={ShopComponentItem.style.currencyImageStyle}
								resizeMode={"contain"}
							/>
						</View>
						<View style={ShopComponentItem.style.currencyCostTextContainer}>
							<Text style={ShopComponentItem.style.currencyCostText}>
								{this.props.pragmaPrice}
							</Text>
						</View>
					</View>

					<View style={ShopComponentItem.style.currencyImageWithPriceContainer}>
						<View style={ShopComponentItem.style.currencyIconContainer}>
							<Image
								source={require("../../../assets/images/Resource-Icons/metal.png")}
								style={ShopComponentItem.style.currencyImageStyle}
								resizeMode={"contain"}

							/>
						</View>
						<View style={ShopComponentItem.style.currencyCostTextContainer}>
							<Text style={ShopComponentItem.style.currencyCostText}>
								{this.props.metalPrice}
							</Text>
						</View>
					</View>
				</View>

				<View style={ShopComponentItem.style.decorationLine}/>
			</View>
		);
	}
}

export interface IShopComponentItemProps extends IButtonWrapperProps {
	itemTitle: string;
	itemDescription: string;
	pragmaPrice: number;
	metalPrice: number;

	canAfford: boolean;
}

export interface IShopComponentItemState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;

	costContainer: ViewStyle;
	currencyImageWithPriceContainer: ViewStyle;
	currencyIconContainer: ViewStyle;
	currencyCostTextContainer: ViewStyle;

	currencyImageStyle: ImageStyle;
	currencyCostText: TextStyle;

	decorationLine: ViewStyle;
}
