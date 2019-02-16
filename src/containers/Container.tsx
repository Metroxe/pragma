import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {IContainerSet} from "./index";
import {IGameData} from "../services/GameData";
import {IGameFunctions} from "../services/GameFunctions";

export default class Container<P extends IContainerProps, S extends IContainerState> extends React.PureComponent<P, S> {

	private static containerStyle: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "white",
			height: "100%",
			width: "100%",
		},
	});

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
					{this.renderPointer()}
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
