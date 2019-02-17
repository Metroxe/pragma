import {ReactNode} from "react";
import * as React from "react";
import {
	Image,
	View,
	Text,
	StyleSheet,
	Dimensions,
	TextStyle,
	ViewStyle,
	ScrollViewComponent,
	ScrollView,
} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "../ButtonWrapper";
import ShopComponentItem from "./ShopComponentItem";

export default class ShopComponentItemList extends EnhancedComponent<IShopComponentItemListProps, IShopComponentItemListState> {

	public static defaultProps: IShopComponentItemListProps = {};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({});

	constructor(props: IShopComponentItemListProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.handleFacilitySelection = this.handleFacilitySelection.bind(this);
		this.createListOfPrices = this.createListOfPrices.bind(this);
	}

	// TODO this function lol
	private handleFacilitySelection(item: any, index: number): (callback: () => void) => void {
		const that: ShopComponentItemList = this;

		return (callback: () => void): void => {
			alert("pressed:" + index);
			callback();
		};
	}

	private createListOfPrices(prices: any): ReactNode {
		return prices.map((price: any, i: number) => {
			return (
				<View
					key={"shopItem" + i}
					style={{
						width: "33%",
					}}
				>
					<ShopComponentItem
						onAction={this.handleFacilitySelection(price, i)}
					/>
				</View>
			);
		});
	}

	public render(): ReactNode {
		const prices: ReactNode = this.createListOfPrices([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

		return (
			<ScrollView>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{prices}
				</View>
			</ScrollView>
		);
	}
}

export interface IShopComponentItemListProps extends IEnhancedComponentsProps {
}

export interface IShopComponentItemListState extends IEnhancedComponentsState {

}

interface IStyle {
}
