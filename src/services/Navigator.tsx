import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {IContainerProps} from "../containers/Container";
import containerSet, {IContainerSet} from "../containers";
import defaultGameData, {IGameData} from "./GameData";
import GameFunctions from "./GameFunctions";

export default class Navigator extends React.PureComponent<INavigatorProps, INavigatorState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			flex: 1,
		},
	});

	public static timeIncrement: number = 1000;
	public calculatingInterval: boolean = false;
	public interval: number;

	public state: INavigatorState = {
		currentContainer: "TestScreen",
		gameData: defaultGameData,
	};

	constructor(props: INavigatorProps) {
		super(props);
		this.renderContainer = this.renderContainer.bind(this);
		this.navigate = this.navigate.bind(this);
		this.intervalFunction = this.intervalFunction.bind(this);
	}

	public componentDidMount(): void {
		if (!this.interval) {
			this.interval = setInterval(this.intervalFunction, Navigator.timeIncrement);
		}
	}

	private intervalFunction(): void {
		if (!this.calculatingInterval) {
			this.calculatingInterval = true;
			console.log("incrementing");
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
		};

		const pointer: any = containerSet[this.state.currentContainer];

		return React.createElement(pointer, props);
	}

	public render(): ReactNode {

		return (
			<View style={Navigator.style.topView}>
				{this.renderContainer()}
			</View>
		);
	}
}

interface IStyle {
	topView: ViewStyle;
}

interface INavigatorProps {

}

interface INavigatorState {
	currentContainer: keyof IContainerSet;
	gameData: IGameData;
}
