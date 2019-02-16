import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import {Dimensions, ScrollView, StyleSheet, TouchableOpacity, View, ViewStyle, Text} from "react-native";
import * as React from "react";
import {ICoordinate, ITile} from "../../services/GameGrid";
import * as _ from "lodash";

export default class Grid extends Container<IGridProps, IGridState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		tileStyle: {
			margin: 3,
			borderColor: "lightgrey",
			borderWidth: 2,
			opacity: 0.7,
		},
		scrollViewStyle: {
			flex: 1,
			flexDirection: "row",
		},
	});

	constructor(props: IContainerProps) {
		super(props);
		this.state = {
			...this.state,
			tileHeight: (Dimensions.get("screen").height) / props.gameData.grid.length,
			tileWidth:  (Dimensions.get("screen").width) / props.gameData.grid[0].length,
		};
		this.createTile = this.createTile.bind(this);
		this.createColumn = this.createColumn.bind(this);
	}

	private createTile(tile: ITile): ReactNode {
		const onPress: () => void = (): void => {
			const that: Grid = this;
			this.props.gameFunctions.selectTile(tile.coordinate).then(
				that.props.gameFunctions.buildOnTile,
			);
		};

		return (
			<TouchableOpacity
				style={[
					Grid.style.tileStyle,
					{
						width: this.state.tileWidth,
						height: this.state.tileHeight,
						borderColor: _.isEqual(this.props.gameData.selectedTile, tile) && "green",
					},
				]}
				key={tile.coordinate.x + "," + tile.coordinate.y}
				onPress={onPress}
			>
				<Text>{JSON.stringify(tile, null, 2)}</Text>
			</TouchableOpacity>
		);
	}

	private createColumn(tileArray: ITile[]): ReactNode {
		return (
			<View
				key={tileArray[0].coordinate.x}
			>
				{tileArray.map(this.createTile)}
			</View>
		);
	}

	public render(): ReactNode {
		return (
			<ScrollView>
				<ScrollView
					horizontal={true}
					style={Grid.style.scrollViewStyle}
				>
					{this.props.gameData.grid.map(this.createColumn)}
				</ScrollView>
			</ScrollView>
		);
	}
}

interface IStyle {
	tileStyle: ViewStyle;
	scrollViewStyle: ViewStyle;
}

export interface IGridProps extends IContainerProps {

}

export interface IGridState extends IContainerState {
	tileHeight: number;
	tileWidth: number;
	selectedTile?: ICoordinate;
}
