import Container, {IContainerProps, IContainerState} from "../Container";
import * as React from "react";
import {ReactNode} from "react";
import {
	Image,
	ImageStyle,
	PixelRatio,
	ScrollView,
	StyleSheet,
	Text, TextStyle, TouchableHighlight,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import * as _ from "lodash";
import {buildingMap, Entity, ICoordinate, ITile} from "../../services/GameGrid";

export default class Grid extends Container<IGridProps, IGridState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		tileStyle: {
			margin: 3,
			borderWidth: 4,
			borderRadius: 30 / PixelRatio.get(),
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
		circle: {
			height: 30,
			width: 30,
			borderRadius: 30 / PixelRatio.get(),
			backgroundColor: "red",
			position: "absolute",
		},
		text: {
			color: "white",
			fontFamily: "Anchor",
		},
	});

	// width: 13961
	// height: 1186
	constructor(props: IContainerProps) {
		super(props);
		this.state = {
			...this.state,
			tileHeight: 1186 / PixelRatio.get() / 4,
			tileWidth: 1186 / PixelRatio.get() / 4,
		};
		this.headerTitle = "Map";

		this.createTile = this.createTile.bind(this);
		this.createColumn = this.createColumn.bind(this);
	}

	private createTile(tile: ITile): ReactNode {
		const onPress: () => void = (): void => {
			this.props.gameFunctions.selectTile(tile.coordinate)
				.then();
		};

		let borderColor: string = "transparent";
		let opacity: number = 0;
		if (tile.entity === Entity.UNOBSTRUCTED) {
			borderColor = "white";
			opacity = 0.5;
		}
		if (_.isEqual(this.props.gameData.selectedTile, tile.coordinate)) {
			borderColor = "white";
			opacity = 1;
		}

		return (
			<TouchableHighlight
				style={[
					Grid.style.tileStyle,
					{
						width: this.state.tileWidth,
						height: this.state.tileHeight,
						opacity,
						borderColor,
					},
				]}
				key={tile.coordinate.x + "," + tile.coordinate.y}
				onPress={onPress}
			>
				<View>
				<Text style={{color: "white"}}>{tile.coordinate.x + "," + tile.coordinate.y}</Text>
				<Text style={{color: "white"}}>{tile.entity}</Text>
				<Text style={{color: "white"}}>{opacity}</Text>
				{
					buildingMap[tile.entity] ? (
						<View>
							<View style={Grid.style.circle}>
								<Text style={Grid.style.text}>10</Text>
							</View>
							<Image
								source={buildingMap[tile.entity]}
								style={{height: this.state.tileHeight, width: this.state.tileWidth}}
								resizeMode="cover"
							/>
						</View>
						) : null
				}
				</View>
			</TouchableHighlight>
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
					source={require("../../../assets/grid.png")}
					style={Grid.style.image as any}
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
	circle: ViewStyle;
	text: TextStyle;
}

export interface IGridProps extends IContainerProps {

}

export interface IGridState extends IContainerState {
	tileHeight: number;
	tileWidth: number;
	selectedTile?: ICoordinate;
}
