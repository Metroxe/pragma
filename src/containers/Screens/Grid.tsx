import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import {ScrollView, StyleSheet, TouchableOpacity, View, ViewStyle} from "react-native";
import * as React from "react";
import {ITile} from "../../services/GameGrid";

export default class Grid extends Container<IGridProps, IGridState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		tileStyle: {
			height: 80,
			width: 80,
			margin: 3,
			borderColor: "lightgrey",
			borderWidth: 2,
			opacity: 0.7,
		},
	});

	constructor(props: IContainerProps) {
		super(props);
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
				style={Grid.style.tileStyle}
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
			<ScrollView>
				<ScrollView horizontal={true}>
					{this.props.gameData.grid.map(this.createRow)}
				</ScrollView>
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

}