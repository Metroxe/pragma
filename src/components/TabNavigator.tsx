import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";
import {IContainerSet} from "../containers";

export class TabNavigator extends EnhancedComponent<ITabNavigatorProps, ITabNavigatorState> {

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

	public static navBarHeight: number = 60;

	constructor(props: ITabNavigatorProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	private handleClick(newPage: string): () => void {

		const that: TabNavigator = this;

		return (): void => {

		// alert("hello");
			that.props.navigate(newPage).then();
		};
	}

	public render(): ReactNode {
		const tabOptions: any = this.props.tabOptions.map((item: IPagePackager, index: number) => {
			return (
				<TouchableOpacity
					key={"tabOption" + index}
					onPress={this.handleClick(item.pageString)}
					style={TabNavigator.style.individualButton}
					activeOpacity={0.75}
				>
					<Text>{item.displayString}</Text>
				</TouchableOpacity>
			);
		});

		return (
			<View style={{...TabNavigator.style.mainContainer, height: TabNavigator.navBarHeight}}>
				{tabOptions}
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

}

export interface ITabNavigatorState extends IEnhancedComponentsProps {

}

interface IStyle {
	mainContainer: ViewStyle;
	individualButton: ViewStyle;
}
