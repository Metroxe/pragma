import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import * as React from "react";
import {ITile} from "../../services/GameGrid";

export default class Grid extends Container<IGridProps, IGridState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		tileStyle: {
			margin: 3,
			borderColor: "lightgrey",
			borderWidth: 2,
			opacity: 0.7,
		},
	});

	constructor(props: IContainerProps) {
		super(props);
		this.state = {
			...this.state,
			tileHeight: Dimensions.get("window").height / props.gameData.grid[0].length,
			tileWidth:  Dimensions.get("window").width / props.gameData.grid.length,
		};
		this.createTile = this.createTile.bind(this);
		this.createRow = this.createRow.bind(this);
		this.tileOnPress = this.tileOnPress.bind(this);
	}

	private tileOnPress(tile: ITile): void {
		alert(tile.coordinate.x + "," + tile.coordinate.y);
	}

	private createTile(tile: ITile): ReactNode {
		const onPress: () => void = (): void => {
			this.tileOnPress(tile);
		};

		return (
			<TouchableOpacity
				style={[
					Grid.style.tileStyle,
					{
						width: this.state.tileWidth,
						height: this.state.tileHeight,
					},
				]}
				key={tile.coordinate.x + "," + tile.coordinate.y}
				onPress={onPress}
			/>
		);
	}

	private createRow(tileArray: ITile[]): ReactNode {
		return (
			<View
				key={tileArray[0].coordinate.y}
			>
				{tileArray.map(this.createTile)}
			</View>
		);
	}

	public render(): ReactNode {
		return (
			<ScrollView horizontal={true}>
				{this.props.gameData.grid.map(this.createRow)}
			</ScrollView>
		);
	}
}

interface IStyle {
	tileStyle: ViewStyle;
}

export interface IGridProps extends IContainerProps {

}

export interface IGridState extends IContainerState {
	tileHeight: number;
	tileWidth: number;
}