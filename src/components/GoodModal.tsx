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
			borderRadius: 20,
			paddingHorizontal: 20,
			height: "100%",
		},
		shadowStyle: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 20 },
			shadowOpacity: 0.8,
			shadowRadius: 20,
			elevation: 1,
		},
	});

	public render(): ReactNode {
		return (
			<View style={GoodModal.style.topView}>
				<ScrollView style={{height: "100%"}} contentContainerStyle={{height: "100%"}}>
					{this.props.children}
				</ScrollView>
			</View>);
	}
}

interface IStyle {
	topView: ViewStyle;
	shadowStyle: ViewStyle;
}

export interface IGoodModalProps {

}

export interface IGoodModalState {

}
