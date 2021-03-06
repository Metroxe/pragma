import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";
import {IContainerSet} from "../containers";
import {ImageOptionComponent} from "./ImageOptionComponent";
import {IGameFunctions} from "../services/GameFunctions";
import {IGameData} from "../services/GameData";

export class TabNavigator extends EnhancedComponent<ITabNavigatorProps, ITabNavigatorState> {

	protected static imgArr: any[] = [{image: require("../../assets/icons/menu.png")}, {image: require("../../assets/icons/settings.png")}, {image: require("../../assets/icons/next.png")}]

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			backgroundColor: "#111228",
			// borderTopStartRadius: 20,
			// borderTopEndRadius: 20,
		},
		secondaryContainerBottom: {
			width: "100%",
			height: 500,
			backgroundColor: "#FBAE34",
			position: "absolute",
			zIndex: 1,
			top: 50,
			borderTopStartRadius: 20,
			borderTopEndRadius: 20,
		},
		individualButton: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			backgroundColor: "green",
		},
		tabNavButtonStyle: {
			bottom: 20,
			flexDirection: "row",
			justifyContent: "space-around",
		},
	});

	public static navBarHeight: number = 130;

	constructor(props: ITabNavigatorProps) {
		super(props);
		this.gameFunctionWrapper = this.gameFunctionWrapper.bind(this);
	}

	private gameFunctionWrapper(callback: () => void): void {
		const that: TabNavigator = this;
		this.props.gameFunctions.incrementTime()
			.then(() => {
				// check for victory
				that.props.changePopUp("daySummary")(callback);
			});
	}

	public componentWillReceiveProps(): void {
		console.log("porps", this.props)
		this.forceUpdate();
	}

	public render(): ReactNode {

		return (
			<View style={[TabNavigator.style.mainContainer, {height: TabNavigator.navBarHeight}]}>
				<View style={TabNavigator.style.secondaryContainerBottom}>
					<View style={TabNavigator.style.tabNavButtonStyle}>
						<ImageOptionComponent
							onPress={this.props.changePopUp("shop")}
							imageKey="build"
							label="Build"
							selected={this.props.popUpKey === "shop"}
						/>
						<ImageOptionComponent
							onPress={this.props.changePopUp("allocation")}
							imageKey="allocate"
							label="Allocate"
							selected={this.props.popUpKey === "allocation"}
						/>
						<ImageOptionComponent
							onPress={this.gameFunctionWrapper}
							imageKey="next"
							label="Next Year"
							selected={this.props.popUpKey === "next"}
						/>
					</View>
				</View>
			</View>
		);
	}
}

export interface IPagePackager {
	pageString: string;
	displayString: string;
}

export interface ITabNavigatorProps extends IEnhancedComponentsProps {
	tabOptions: IPagePackager[];
	navigate: (page: keyof IContainerSet) => Promise<void>;
	changePopUp: (key: string) => (callback: () => void) => void;
	gameFunctions?: IGameFunctions;
	popUpKey?: string;
	gameData: IGameData;
}

export interface ITabNavigatorState extends IEnhancedComponentsProps {

}

interface IStyle {
	mainContainer: ViewStyle;
	secondaryContainerBottom: ViewStyle;
	individualButton: ViewStyle;
	tabNavButtonStyle: ViewStyle;
}
