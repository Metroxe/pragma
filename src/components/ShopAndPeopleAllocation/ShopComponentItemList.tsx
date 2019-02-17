import * as React from "react";
import {ReactNode} from "react";
import {ScrollView, StyleSheet, View,} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import ShopComponentItem from "./ShopComponentItem";
import {IEntityTracking, IGameData} from "../../services/GameData";
import {Entity} from "../../services/GameGrid";
import {IGameFunctions} from "../../services/GameFunctions";
import * as _ from "lodash";
import TotalUserResourcesDisplayForShop from "./TotalUserResourcesDisplayForShop";

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

		const that: ShopComponentItemList = this;

		const onAction: (callback: () => void) => void = (callback: () => void): void => {
			this.props.gameFunctions.changeEntitySelection(item.entityKey)
				.then(() => {
					that.props.changePopUp(undefined)(callback);
				});
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
					itemTitle={item.entityKey + ""}
					itemDescription={item.entityKey + ""}
				/>
			</View>
		);
	}

	public render(): ReactNode {
		const entities: IEntityTracking[] = [];
		let item: any;
		for (item in Entity) {
			if (!isNaN(Number(item)) &&
				!_.isEqual(item + "", Entity.UNOBSTRUCTED + "") &&
				!_.isEqual(item + "", Entity.OBSTRUCTED + "")
			) {
				entities.push(this.props.gameData[item]);
			}
		}

		return (
			<ScrollView>

				<View>
					<TotalUserResourcesDisplayForShop/>
				</View>

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
	gameFunctions: IGameFunctions;
	changePopUp: (key: string) => (callback: () => void) => void;
}

export interface IShopComponentItemListState extends IEnhancedComponentsState {

}

interface IStyle {
}
