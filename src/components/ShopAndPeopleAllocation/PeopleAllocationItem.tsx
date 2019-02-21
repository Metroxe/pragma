import {ReactNode} from "react";
import * as React from "react";
import {Image, View, Text, StyleSheet, Dimensions, TextStyle, ViewStyle, ImageStyle} from "react-native";
import ShopAndPeopleGenericBodyWithImage from "./ShopAndPeopleGenericBodyWithImage";
import PeopleAddDecreaseComponent from "./PeopleAddDecreaseComponent";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import {IGameFunctions} from "../../services/GameFunctions";
import {Entity} from "../../services/GameGrid";
import {IIndividualLocation} from "../../services/GameData";

export default class PeopleAllocationItem extends EnhancedComponent<IPeopleAllocationItemProps, IPeopleAllocationItemState> {

	public static defaultProps: IPeopleAllocationItemProps = {
		itemTitle: "People Title",
		itemDescription: "People Description",

		peopleAssigned: 0,
		maxPeople: 10,
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			padding: 10,
		},
		interactPartContainer: {
			marginTop: 10,
			flexDirection: "row",
			height: 60,
		},
		peopleIconContainer: {
			flex: 5,
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		currencyImageStyle: {
			height: "100%",
			maxWidth: "100%",
		},
		peopleSelectorContainer: {
			flex: 5,
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		decorationLine: {
			width: "95%",
			alignSelf: "center",
			backgroundColor: "#111228",
			height: 1,
			marginTop: 20,
		},
	});

	constructor(props: IPeopleAllocationItemProps) {
		super(props);
		this.state = {
			...this.state,
			peopleAssigned: props.peopleAssigned,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.generateTextForNumberPicker = this.generateTextForNumberPicker.bind(this);
	}

	private increment(): void {
		const that: PeopleAllocationItem = this;
		this.props.gameFunctions.changeAllocation(1, this.props.loc).then(() => {
			if (that.state.peopleAssigned < that.props.maxPeople) {
				that.setState({
					peopleAssigned: that.state.peopleAssigned + 1,
				});
			}
		});
	}

	private decrement(): void {
		const that: PeopleAllocationItem = this;
		this.props.gameFunctions.changeAllocation(-1, this.props.loc).then(() => {
			if (that.state.peopleAssigned > 0) {
				that.setState({
					peopleAssigned: that.state.peopleAssigned - 1,
				});
			}
		});
	}

	private generateTextForNumberPicker(): string {
		return (this.state.peopleAssigned + " /" + this.props.maxPeople);
	}

	public render(): ReactNode {

		const numberPickerText: string = this.generateTextForNumberPicker();

		return (
			<View style={PeopleAllocationItem.style.mainContainer}>

				<ShopAndPeopleGenericBodyWithImage
					title={this.props.itemTitle}
					description={this.props.itemDescription}
					imageSrc={this.props.image}
				/>

				<View style={PeopleAllocationItem.style.interactPartContainer}>
					<View style={PeopleAllocationItem.style.peopleIconContainer}>
						<Image
							source={require("../../../assets/images/Resource-Icons/people.png")}
							style={PeopleAllocationItem.style.currencyImageStyle}
							resizeMode={"contain"}
						/>
					</View>
					<View style={PeopleAllocationItem.style.peopleSelectorContainer}>
						<PeopleAddDecreaseComponent
							increment={this.increment}
							decrement={this.decrement}
							text={numberPickerText}
						/>
					</View>
				</View>

				<View style={PeopleAllocationItem.style.decorationLine}/>
			</View>
		);
	}
}

export interface IPeopleAllocationItemProps extends IEnhancedComponentsProps {
	itemTitle: string;
	itemDescription: string;
	image: any;
	peopleAssigned: number;
	maxPeople: number;
	gameFunctions: IGameFunctions;
	entity: Entity;
	loc: IIndividualLocation;
}

export interface IPeopleAllocationItemState extends IEnhancedComponentsState {
	peopleAssigned: number;
}

interface IStyle {
	mainContainer: ViewStyle;

	interactPartContainer: ViewStyle;
	peopleIconContainer: ViewStyle;
	currencyImageStyle: ViewStyle;

	peopleSelectorContainer: ViewStyle;

	decorationLine: ViewStyle;
}
