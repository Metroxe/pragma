import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import * as React from "react";
import {StyleSheet, View, ViewStyle, Text, Image} from "react-native";

export default class TabNavigator extends EnhancedComponent<ITabNavigatorProps, ITabNavigatorState> {
	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "red",
			height: 100,
			width: "100%",
		},
	});

	constructor(props: ITabNavigatorProps) {
		super(props);
		this.createTab = this.createTab.bind(this);
	}

	private createTab(tab: ITab, index: number): ReactNode {

		return (
			<View key={"example " + index}>
				<Text>{tab.key}</Text>
			</View>
		);
	}

	public render(): ReactNode {
		return (
				<View style={TabNavigator.style.topView}>
					{this.createTab({key: "hello", image: "https://i.ytimg.com/vi/Fa_I68L_APY/maxresdefault.jpg" }, 1)}
				</View>
			);
	}
}

interface IStyle {
	topView: ViewStyle;
}

interface ITab {
	key: string;
	image: any;
}

export interface ITabNavigatorProps extends IEnhancedComponentsProps {
	tabs: ITab[];
	currentTab: string;
}

export interface ITabNavigatorState extends IEnhancedComponentsState {

}
