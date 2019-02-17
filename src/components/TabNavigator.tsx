import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";
import {IContainerSet} from "../containers";
import {ImageOptionComponent} from "./ImageOptionComponent";

export class TabNavigator extends EnhancedComponent<ITabNavigatorProps, ITabNavigatorState> {

	protected static imgArr: any[] = [{image: require("../../assets/icons/menu.png")}, {image: require("../../assets/icons/settings.png")}, {image: require("../../assets/icons/next.png")}]

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			flexDirection: "row",
			backgroundColor: "purple",
		},
		individualButton: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			backgroundColor: "green",
		},
	});

	public static navBarHeight: number = 130;

	public render(): ReactNode {

		return (
			<View style={[TabNavigator.style.mainContainer, {height: TabNavigator.navBarHeight}]}>
				<ImageOptionComponent
					onPress={this.props.changePopUp("shop")}
					imageKey="shop"
					label="shop"
				/>
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
}

export interface ITabNavigatorState extends IEnhancedComponentsProps {

}

interface IStyle {
	mainContainer: ViewStyle;
	individualButton: ViewStyle;
}
