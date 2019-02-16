import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, StyleSheet, Text, View, ViewStyle} from "react-native";
import {IContainerSet} from "./index";
import {IGameData} from "../services/GameData";
import {IGameFunctions} from "../services/GameFunctions";
import {IPagePackager, TabNavigator} from "../components/TabNavigator";
import {Header} from "../components/Header";

export default class Container<P extends IContainerProps, S extends IContainerState> extends React.PureComponent<P, S> {

	private static containerStyle: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "white",
			// flex: 1,
			height: Dimensions.get("screen").height,
			width: Dimensions.get("screen").width,
		},
	});

	private static pagesArray: IPagePackager[] = [
		{
			pageString: "Grid",
			displayString: "Map",
		},
		{
			pageString: "AllocatePeopleScreen",
			displayString: "Allocate",
		},
		{
			pageString: "ShopScreen",
			displayString: "ShopScreen",
		},
		{
			pageString: "TestScreen",
			displayString: "TestScreen",
		},
	];

	public renderPointer: () => ReactNode;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {};
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
	}

	public wrapRender(): void {
		this.renderPointer = this.render;
		this.render = (): ReactNode => {
			return (
				<View style={Container.containerStyle.topView}>
					<Header
						title={Container.pagesArray[Container.pagesArray.findIndex((property: IPagePackager) => property.pageString === this.props.currentPage.toString())].displayString}
					/>

					<View
						style={{height: Dimensions.get("screen").height - Header.headerHeight - TabNavigator.navBarHeight}}>
						{this.renderPointer()}
					</View>

					<TabNavigator
						tabOptions={Container.pagesArray}
						navigate={this.props.navigate}
					/>
				</View>
			);
		};
	}

}

interface IStyle {
	topView: ViewStyle;

}

export interface IContainerProps {
	navigate: (page: keyof IContainerSet) => Promise<void>;
	gameData: IGameData;
	gameFunctions: IGameFunctions;
	currentPage: keyof IContainerSet;
}

export interface IContainerState {

}
