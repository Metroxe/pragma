import Container, {IContainerProps, IContainerState} from "../Container";
import * as React from "react";
import {ReactNode} from "react";
import {
	Image,
	ImageStyle,
	PixelRatio,
	ScrollView,
	StyleSheet,
	Text,
	TextStyle,
	TouchableHighlight,
	View,
	ViewStyle,
} from "react-native";
import * as _ from "lodash";
import {Entity, ICoordinate, ITile} from "../../services/GameGrid";
import SilverModalButton from "../../components/SilverModalButton";
import {IEntityTracking, IIndividualLocation} from "../../services/GameData";

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
			borderRadius: /*30 / PixelRatio.get()*/9999,
			backgroundColor: "linear-gradient(90deg, rgba(22, 125, 121, 0.7) 0.05%, #167D79 100.02%)",
			position: "absolute",
			justifyContent: "center",
			alignItems: "center",
		},
		text: {
			color: "white",
			fontFamily: "Anchor",
			fontSize: 22,
			marginTop: 2,
		},
		buildButton: {
			position: "absolute",
			bottom: 20,
			alignSelf: "center",
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
			mapWidth: Image.resolveAssetSource(require("../../../assets/grid.png")).width,
		};
		this.headerTitle = "Map";

		this.createTile = this.createTile.bind(this);
		this.createColumn = this.createColumn.bind(this);
		this.buildAction = this.buildAction.bind(this);
	}

	private createTile(tile: ITile): ReactNode {
		const onPress: () => void = (): void => {
			this.props.gameFunctions.selectTile(tile.coordinate)
				.then();
		};

		let borderColor: string = "transparent";
		let opacity: number = 1;
		if (_.isEqual(this.props.gameData.selectedTile, tile.coordinate)) {
			borderColor = "white";
			opacity = 1;
		} else if (tile.entity === Entity.OBSTRUCTED) {
			borderColor = "transparent";
			opacity = 0;
		} else if (tile.entity === Entity.UNOBSTRUCTED) {
			borderColor = "grey";
			opacity = 0.3;
		}

		let loc: IIndividualLocation;
		for (loc of (this.props.gameData[tile.entity] as IEntityTracking).individualLocations) {
			if (loc.location.x === tile.coordinate.x && loc.location.y === tile.coordinate.y) {
				break;
			}
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
				underlayColor="transparent"
				key={tile.coordinate.x + "," + tile.coordinate.y}
				onPress={onPress}
			>
				<View>
				{
					tile.entity !== Entity.OBSTRUCTED && tile.entity !== Entity.UNOBSTRUCTED ? (
						<View>
							<Image
								source={(this.props.gameData[tile.entity] as IEntityTracking).image}
								style={{height: this.state.tileHeight, width: this.state.tileWidth}}
								resizeMode="cover"
							/>
							<View style={[Grid.style.circle, {right: 0}]}>
								<Text style={Grid.style.text}>{loc.allocatedPeople}</Text>
							</View>
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

	private buildAction(callback: () => void): void {
		this.props.gameFunctions.buildOnTile()
			.then(callback);
	}

	public render(): ReactNode {
		return (
			<View>
				<ScrollView
					horizontal={true}
					bounces={false}
					style={Grid.style.scrollViewStyle}
					contentContainerStyle={{alignItems: "center"}}
					contentOffset={{x: this.state.mapWidth ? this.state.mapWidth / 2 : 0, y: 0}}
				>
					<Image
						source={require("../../../assets/grid.png")}
						style={Grid.style.image as any}
						resizeMode="stretch"
					/>
					{this.props.gameData.grid.map(this.createColumn)}
				</ScrollView>
				{
					this.props.gameData.selectedTile !== undefined ?
						<View style={Grid.style.buildButton}>
							<SilverModalButton
								buttonText="Build"
								onAction={this.buildAction}
							/>
						</View> : null
				}

			</View>
		);
	}
}

interface IStyle {
	tileStyle: ViewStyle;
	scrollViewStyle: ViewStyle;
	image: ImageStyle;
	circle: ViewStyle;
	text: TextStyle;
	buildButton: ViewStyle;
}

export interface IGridProps extends IContainerProps {

}

export interface IGridState extends IContainerState {
	tileHeight: number;
	tileWidth: number;
	selectedTile?: ICoordinate;
	mapWidth?: number;
}
