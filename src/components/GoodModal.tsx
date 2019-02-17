import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, ScrollView, StyleSheet, View, ViewStyle} from "react-native";
import {Header} from "./Header";
import {TabNavigator} from "./TabNavigator";

export default class GoodModal extends React.Component<IGoodModalProps, IGoodModalState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			flex: 1,
			backgroundColor: "white",
		},
	});

	public render(): ReactNode {
		return (
			<View style={GoodModal.style.topView}>
				<ScrollView>
					{this.props.children}
				</ScrollView>
			</View>);
	}
}

interface IStyle {
	topView: ViewStyle;
}

export interface IGoodModalProps {

}

export interface IGoodModalState {

}