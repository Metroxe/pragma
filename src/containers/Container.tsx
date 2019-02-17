import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import {IContainerSet} from "./index";
import {IGameData} from "../services/GameData";
import {IGameFunctions} from "../services/GameFunctions";
import {ISound} from "../services/sound";

export default class Container<P extends IContainerProps, S extends IContainerState> extends React.PureComponent<P, S> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "white",
			flex: 1,
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
				<View style={Container.style.topView}>
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
	gameMusic: ISound;
}

export interface IContainerState {

}
