import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, StyleSheet, View, ViewStyle} from "react-native";
import {IContainerProps} from "../containers/Container";
import containerSet, {IContainerSet} from "../containers";
import defaultGameData, {IGameData} from "./GameData";
import GameFunctions from "./GameFunctions";
import makeSound, {SoundEffect} from "./sound";
import GoodModal from "../components/GoodModal";
import {Header} from "../components/Header";
import {TabNavigator} from "../components/TabNavigator";
import ShopComponentItemList from "../components/ShopAndPeopleAllocation/ShopComponentItemList";
import PeopleAllocationItemList from "../components/ShopAndPeopleAllocation/PeopleAllocationItemList";
import DailySummaryPopUpContent from "../components/DailySummaryPopUpContent";
import EndGameModalContent from "../components/EndGameModalContent";

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
		resourceStats: {},
	});

	public calculatingInterval: boolean = false;

	public state: INavigatorState = {
		currentContainer: "StartScreen",
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
			popUpKey: this.state.popUpKey,
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
				return createPopUp(<PeopleAllocationItemList
					gameData={this.state.gameData}
					gameFunctions={GameFunctions(this)}
					changePopUp={this.changePopUp}
				/>);
			case("daySummary"):
				return createPopUp(
					<DailySummaryPopUpContent
						closeModal={this.changePopUp(undefined)}
						gameData={this.state.gameData}
					/>,
				);
			case("victory"):
				return createPopUp(
					<EndGameModalContent victory={true}/>,
				);
			case("loss"):
				return createPopUp(
					<EndGameModalContent victory={false}/>,
				);
			default:
				return <View/>;
		}
	}

	public render(): ReactNode {
		return (
			<View style={Navigator.style.topView}>
				{this.renderContainer()}
				{this.determinePopUp()}
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
