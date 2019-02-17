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
import TotalPeopleDisplayForAllocationModal from "../TotalPeopleDisplayForAllocationModal";
import {IEntityTracking, IGameData, IIndividualLocation} from "../../services/GameData";
import {IGameFunctions} from "../../services/GameFunctions";
import {Entity} from "../../services/GameGrid";
import * as _ from "lodash";

export default class PeopleAllocationItemList extends EnhancedComponent<IPeopleAllocationItemListProps, IPeopleAllocationItemListState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({});

	constructor(props: IPeopleAllocationItemListProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.createEntries = this.createEntries.bind(this);
	}

	private createEntries(item: IIndividualLocation, i: number): ReactNode {
		return (
			<View
				key={"peopleAllocationItem" + i}
				style={{
					width: "33%",
				}}
			>
				<PeopleAllocationItem
					itemTitle={(this.props.gameData[item.entity] as IEntityTracking).title}
					itemDescription={"(" + item.location.x + "," + item.location.y + ")"}
					image={(this.props.gameData[item.entity] as IEntityTracking).image}
					peopleAssigned={item.allocatedPeople}
					gameFunctions={this.props.gameFunctions}
					entity={item.entity}
					loc={item}
					maxPeople={(this.props.gameData[item.entity] as IEntityTracking).maximumAllocatedPeople}
				/>
			</View>
		);
	}

	public render(): ReactNode {
		const locs: IIndividualLocation[] = [];
		let peopleAllocated: number = 0;

		let item: any;
		for (item in Entity) {
			if (!isNaN(Number(item)) &&
				!_.isEqual(item + "", Entity.UNOBSTRUCTED + "") &&
				!_.isEqual(item + "", Entity.OBSTRUCTED + "")
			) {
				let loc: IIndividualLocation;
				for (loc of (this.props.gameData[item] as IEntityTracking).individualLocations) {
					locs.push(_.clone(loc));
					peopleAllocated += loc.allocatedPeople;
				}
			}
		}

		return (
			<ScrollView>

				<View>
					<TotalPeopleDisplayForAllocationModal
						peopleRemaining={this.props.gameData.people - peopleAllocated}
						totalPeople={this.props.gameData.people}
					/>
				</View>

				<View
					style={{
						width: "100%",
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					{locs.map(this.createEntries)}
				</View>
			</ScrollView>
		);
	}
}

export interface IPeopleAllocationItemListProps extends IEnhancedComponentsProps {
	gameData: IGameData;
	gameFunctions: IGameFunctions;
	changePopUp: (key: string) => (callback: () => void) => void;
}

export interface IPeopleAllocationItemListState extends IEnhancedComponentsState {

}

interface IStyle {
}
