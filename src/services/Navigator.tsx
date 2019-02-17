import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, View, ViewStyle, Text, Dimensions} from "react-native";
import {IContainerProps} from "../containers/Container";
import containerSet, {IContainerSet} from "../containers";
import defaultGameData, {IGameData} from "./GameData";
import GameFunctions from "./GameFunctions";
import makeSound, {ISound} from "./sound";
import GoodModal from "../components/GoodModal";
import {Header} from "../components/Header";
import {TabNavigator} from "../components/TabNavigator";
import ResourceStats from "../components/ResourceStats";
import ShopComponentItemList from "../components/ShopAndPeopleAllocation/ShopComponentItemList";
import PeopleAllocationItemList from "../components/ShopAndPeopleAllocation/PeopleAllocationItemList";

export default class Navigator extends React.Component<INavigatorProps, INavigatorState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			flex: 1,
		},
		goodModal: {
			position: "absolute",
			height: Dimensions.get("window").height - Header.headerHeight - TabNavigator.navBarHeight - 80,
			width: "95%",
			bottom: TabNavigator.navBarHeight + 50,
			alignSelf: "center",
		},
		resourceStats: {
			position: "absolute",
			left: 10,
			top: 30,
		},
	});

	public static timeIncrement: number = 1000;
	public calculatingInterval: boolean = false;
	public interval: number;

	public state: INavigatorState = {
		currentContainer: "Grid",
		gameData: defaultGameData,
		popUpKey: undefined,
	};

	constructor(props: INavigatorProps) {
		super(props);
		this.renderContainer = this.renderContainer.bind(this);
		this.navigate = this.navigate.bind(this);
		this.intervalFunction = this.intervalFunction.bind(this);
		this.changePopUp = this.changePopUp.bind(this);
		console.disableYellowBox = true;
	}

	public componentDidMount(): void {
		if (!this.interval) {
			this.interval = setInterval(this.intervalFunction, Navigator.timeIncrement);
		}
	}

	private intervalFunction(): void {
		if (!this.calculatingInterval) {
			this.calculatingInterval = true;
			const that: Navigator = this;
			GameFunctions(this)
				.incrementTime()
				.then(() => {
					that.calculatingInterval = false;
				});
		}
	}

	private navigate(page: keyof IContainerSet): Promise<void> {
		const that: Navigator = this;
		return new Promise((resolve: () => void): void => {
			that.setState({currentContainer: page}, resolve);
		});
	}

	private renderContainer(): ReactNode {
		const props: IContainerProps = {
			navigate: this.navigate,
			gameData: this.state.gameData,
			gameFunctions: GameFunctions(this),
			gameMusic: makeSound(),
			currentPage: this.state.currentContainer,
			changePopUp: this.changePopUp,
		};

		const pointer: any = containerSet[this.state.currentContainer];

		return React.createElement(pointer, props);
	}

	private changePopUp(popUpKey: "shop" | "allocation"): (callback: () => void) => void {
		const that: Navigator = this;
		return (callback: () => void): void => {
			that.setState({
				popUpKey: that.state.popUpKey === popUpKey ? undefined : popUpKey,
			}, callback);
		};
	}

	private determinePopUp(): ReactNode {
		function createPopUp(child: ReactNode): ReactNode {
			return (
				<View style={Navigator.style.goodModal}>
					<GoodModal>
						{child}
					</GoodModal>
				</View>
			);
		}

		switch (this.state.popUpKey) {
			case("shop"):
				return createPopUp(
					<ShopComponentItemList
						gameData={this.state.gameData}
						gameFunctions={GameFunctions(this)}
						changePopUp={this.changePopUp}
					/>);
			case("allocation"):
				return createPopUp(<PeopleAllocationItemList/>);
			default:
				return <View/>;
		}
	}

	public render(): ReactNode {
		return (
			<View style={Navigator.style.topView}>
				{this.renderContainer()}
				{this.determinePopUp()}
				{
					this.state.popUpKey === undefined ?
					<View style={Navigator.style.resourceStats}>
						<ResourceStats gameData={this.state.gameData}/>
					</View> : null
				}
			</View>
		);
	}
}

interface IStyle {
	topView: ViewStyle;
	goodModal: ViewStyle;
	resourceStats: ViewStyle;
}

interface INavigatorProps {

}

interface INavigatorState {
	currentContainer: keyof IContainerSet;
	gameData: IGameData;
	popUpKey: string;
}
