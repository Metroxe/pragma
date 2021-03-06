import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import EnhancedComponents, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import CountDisplay from "./CountDisplay";
import {IGameData} from "../services/GameData";

export default class ResourceStats extends EnhancedComponents<IResourceStatsProps, IResourceStatsState> {

	public static resourceImages: any = {
		pragma: require("../../assets/images/Resource-Icons/pragma.png"),
		food: require("../../assets/images/Resource-Icons/food.png"),
		people: require("../../assets/images/Resource-Icons/people.png"),
		metal: require("../../assets/images/Resource-Icons/metal.png"),
	}

	public static defaultProps: IResourceStatsProps = {
	};

	public static style: StyleSheet.NamedStyles<any> = StyleSheet.create<any>({
		resourceStats: {
			height: 164,
			width: 130,
			backgroundColor: "#111228",
			borderRadius: 20,
			paddingTop: 5,
			paddingBottom: 12,
		},
		resourceStats2: {
			top: 6,
			position: "absolute",
			height: 164,
			width: 130,
			backgroundColor: "#FBAE34",
			borderRadius: 20,
			paddingTop: 5,
			paddingBottom: 12,
		},
		resourceStatsRow: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			// borderColor: "red",
			// borderWidth: 1,
			flex: 1,
		},
		resourceStatsLeft: {
			width: 48,
			// borderColor: "green",
			// borderWidth: 1,
			marginRight: 5,
			marginLeft: -2,
		},
		resourceStatsText: {
			color: "#ccc",
			fontFamily: "Anchor",
			fontSize: 14,
		},
		resourceStatsImgContainer: {
			width: 30,
			height: 30,
			flexDirection: "row",
			justifyContent: "flex-end",
		},
		resourceStatsImg: {
			width: 30,
			height: 30,
			// borderColor: "purple",
			// borderWidth: 1,
		},
	});

	public render(): ReactNode {
		return (
			<View>
				<View style={[ResourceStats.style.resourceStats2]}/>
				<View style={ResourceStats.style.resourceStats}>
					<View style={ResourceStats.style.resourceStatsRow}><Text style={[ResourceStats.style.resourceStatsText, ResourceStats.style.resourceStatsLeft]}>YEARS LEFT</Text><CountDisplay style={ResourceStats.style.countDisplay} textStyle={ResourceStats.style.countDisplayText} count={this.props.gameData.maxTime - this.props.gameData.time} /></View>
					<View style={ResourceStats.style.resourceStatsRow}><View style={[ResourceStats.style.resourceStatsImgContainer, ResourceStats.style.resourceStatsLeft]}><Image resizeMode={"contain"} style={[ResourceStats.style.resourceStatsImg]} source={ResourceStats.resourceImages.pragma} /></View><CountDisplay count={this.props.gameData.pragma}/></View>
					<View style={ResourceStats.style.resourceStatsRow}><View style={[ResourceStats.style.resourceStatsImgContainer, ResourceStats.style.resourceStatsLeft]}><Image resizeMode={"contain"} style={[ResourceStats.style.resourceStatsImg]} source={ResourceStats.resourceImages.food} /></View><CountDisplay count={this.props.gameData.food}/></View>
					<View style={ResourceStats.style.resourceStatsRow}><View style={[ResourceStats.style.resourceStatsImgContainer, ResourceStats.style.resourceStatsLeft]}><Image resizeMode={"contain"} style={[ResourceStats.style.resourceStatsImg]} source={ResourceStats.resourceImages.people} /></View><CountDisplay count={this.props.gameData.people}/></View>
					<View style={ResourceStats.style.resourceStatsRow}><View style={[ResourceStats.style.resourceStatsImgContainer, ResourceStats.style.resourceStatsLeft]}><Image resizeMode={"contain"} style={[ResourceStats.style.resourceStatsImg]} source={ResourceStats.resourceImages.metal} /></View><CountDisplay count={this.props.gameData.metal}/></View>
				</View>
			</View>
		);
	}
}

export interface IResourceStatsProps extends IEnhancedComponentsProps {
	gameData: IGameData;
}

export interface IResourceStatsState extends IEnhancedComponentsState {

}
