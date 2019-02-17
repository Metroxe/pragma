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
import PeopleAllocationItem from "./PeopleAllocationItem";

export default class PeopleAllocationItemList extends EnhancedComponent<IPeopleAllocationItemListProps, IPeopleAllocationItemListState> {

	public static defaultProps: IPeopleAllocationItemListProps = {};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({});

	constructor(props: IPeopleAllocationItemListProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.createListOfOwnedFacilities = this.createListOfOwnedFacilities.bind(this);
	}

	private createListOfOwnedFacilities(prices: any): ReactNode {
		return prices.map((price: any, i: number) => {
			return (
				<View
					key={"peopleAllocationItem" + i}
					style={{
						width: "33%",
					}}
				>
					<PeopleAllocationItem
					/>
				</View>
			);
		});
	}

	public render(): ReactNode {
		const prices: ReactNode = this.createListOfOwnedFacilities([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

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

export interface IPeopleAllocationItemListProps extends IEnhancedComponentsProps {
}

export interface IPeopleAllocationItemListState extends IEnhancedComponentsState {

}

interface IStyle {
}
