import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, StyleSheet, Text, View, ViewStyle} from "react-native";
import {IContainerSet} from "./index";
import {IGameData} from "../services/GameData";
import {IGameFunctions} from "../services/GameFunctions";
import {IPagePackager, TabNavigator} from "../components/TabNavigator";

export default class Container<P extends IContainerProps, S extends IContainerState> extends React.PureComponent<P, S> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "white",
			// flex: 1,
			height: Dimensions.get("screen").height,
			width: Dimensions.get("screen").width,
		},
	});

	private static pagesArray: IPagePackager[] = [
		{
			pageString: "test",
			displayString: "TEST",
		},
		{
			pageString: "AllocatePeopleScreen",
			displayString: "Allocate",
		},
		{
			pageString: "ShopScreen",
			displayString: "ShopScreen",
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
				<View style={Container.style.topView}>
					{this.renderPointer()}
					<View style={{position: "absolute", width: "100%", bottom: 0}}>
						<TabNavigator
							tabOptions={Container.pagesArray}
							navigate={this.props.navigate}
						/>
					</View>
					<View/>
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
}

export interface IContainerState {

}
