import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";

export default class ShopItemComponent extends ButtonWrapper<IShopItemComponentProps, IShopItemComponentState> {

	public static defaultProps: IShopItemComponentProps = {
		itemTitle: "Title",
		itemDescription: "Description",
		pragmaPrice: 69,
		metalPrice: 420,
		canAfford: true,
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

	constructor(props: IShopItemComponentProps) {
		super(props);
		this.state = {
			...this.state,
			disabled: !props.canAfford,
		};
	}

	public render(): ReactNode {
		return (
			<View style={{...ShopItemComponent.style.mainContainer, opacity: this.props.canAfford ? 1 : 0.3}}>
				<View style={ShopItemComponent.style.previewImageContainer}>
					<Image
						source={require("../../assets/images/Resource-Icons/pragma.png")}
						style={ShopItemComponent.style.currencyImageStyle}
						resizeMode={"contain"}
					/>
				</View>

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

				<View style={ShopItemComponent.style.decorationLine}/>
			</View>
		);
	}
}

export interface IShopItemComponentProps extends IButtonWrapperProps {
	itemTitle: string;
	itemDescription: string;
	pragmaPrice: number;
	metalPrice: number;

	canAfford: boolean;
}

export interface IShopItemComponentState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;

	previewImageContainer: ViewStyle;

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

	decorationLine: ViewStyle;
}
