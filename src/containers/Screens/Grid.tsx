import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import {
	Dimensions,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
	Text,
	Image,
	ImageStyle, PixelRatio, FlatList, ListRenderItemInfo
} from "react-native";
import * as React from "react";
import {ICoordinate, ITile} from "../../services/GameGrid";
import * as _ from "lodash";

export default class Grid extends Container<IGridProps, IGridState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		tileStyle: {
			margin: 3,
			borderWidth: 2,
			opacity: 0.5,
			height: 1,
		},
		scrollViewStyle: {
			flexDirection: "row",
			height: "100%",
		},
		image: {
			height: "100%",
			width: "100%",
			position: "absolute",
		},
	});

	// width: 13961
	// height: 1186
	constructor(props: IContainerProps) {
		super(props);
		this.state = {
			...this.state,
			tileHeight: 1186 / PixelRatio.get() / 3,
			tileWidth: 1186 / PixelRatio.get() / 3,
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
						borderColor: _.isEqual(this.props.gameData.selectedTile, tile.coordinate) ? "green" : "grey",
					},
				]}
				key={tile.coordinate.x + "," + tile.coordinate.y}
				onPress={onPress}
			>
				{/*<Text>{JSON.stringify(tile, null, 2)}</Text>*/}
			</TouchableOpacity>
		);
	}

	private createColumn(column: ITile[]): ReactNode {
		return (
			<View
				key={column[0].coordinate.x}
			>
				{column.map(this.createTile)}
			</View>
		);
	}

	public render(): ReactNode {
		return (
			<ScrollView
				horizontal={true}
				bounces={false}
				style={Grid.style.scrollViewStyle}
				contentContainerStyle={{alignItems: "center"}}
			>
				<Image
					source={require("../../../assets/grid.jpg")}
					style={Grid.style.image}
					resizeMode="stretch"
				/>
				{this.props.gameData.grid.map(this.createColumn)}
			</ScrollView>
		);
	}
}

interface IStyle {
	tileStyle: ViewStyle;
	scrollViewStyle: ViewStyle;
	image: ImageStyle;
}

export interface IGridProps extends IContainerProps {

}

export interface IGridState extends IContainerState {
	tileHeight: number;
	tileWidth: number;
	selectedTile?: ICoordinate;
}
