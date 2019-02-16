import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";

export class TabNavigator extends EnhancedComponent<ITabNavigatorProps, ITabNavigatorState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		MainContainer: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
		},
	});

	constructor(props: ITabNavigatorProps) {
		super(props);
		this.test = this.test.bind(this);
	}

	private test(): void {
		alert("hello");
	}

	public render(): ReactNode {
		const tabOptions: any = this.props.tabOptions.map((arr, index) => {
			return (
				<TouchableOpacity key={"tabOption" + index} onPress={this.test} style={{flex: 1, height: 100, backgroundColor: "blue"}}><Text>{arr}</Text></TouchableOpacity>
				)});
		return (
			<View style={TabNavigator.style.MainContainer}>
				{tabOptions}
			</View>
		)
	}
}

export interface ITabNavigatorProps extends IEnhancedComponentsProps {
	tabOptions: any[];
	currentPage: () => Promise<string>;

}

export interface ITabNavigatorState extends IEnhancedComponentsProps {

}

interface IStyle {
	MainContainer: ViewStyle;
}
