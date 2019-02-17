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
import {IEntityTracking, IGameData} from "../../services/GameData";
import {Entity} from "../../services/GameGrid";
import defaultGameData from "../../services/GameData";

export default class ShopComponentItemList extends EnhancedComponent<IShopComponentItemListProps, IShopComponentItemListState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({});

	constructor(props: IShopComponentItemListProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.createEntries = this.createEntries.bind(this);
	}

	private createEntries(item: IEntityTracking, i: number): ReactNode {

		const onAction: (callback: () => void) => void = (callback: () => void): void => {

			callback();
		};

		const canAfford: boolean =
			this.props.gameData.pragma >= item.price.pragma &&
			this.props.gameData.metal >= item.price.metal;

		return (
			<View
				key={"shopItem" + i}
				style={{
					width: "33%",
				}}
			>
				<ShopComponentItem
					pragmaPrice={item.price.pragma}
					metalPrice={item.price.metal}
					onAction={onAction}
					canAfford={canAfford}
				/>
			</View>
		);
	}

	public render(): ReactNode {
		const entities: IEntityTracking[] = [];
		let item: any
		for (item in Entity) {
			if (!isNaN(Number(item))) {
				entities.push(this.props.gameData[item]);
			}
		}

		return (
			<ScrollView>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{entities.map(this.createEntries)}
				</View>
			</ScrollView>
		);
	}
}

export interface IShopComponentItemListProps extends IEnhancedComponentsProps {
	gameData: IGameData;
}

export interface IShopComponentItemListState extends IEnhancedComponentsState {

}

interface IStyle {
}
