import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {IContainerProps} from "../containers/Container";
import containerSet, {IContainerSet} from "../containers";

export default class Navigator extends React.PureComponent<INavigatorProps, INavigatorState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			flex: 1,
		},
	});

	public state: INavigatorState = {
		currentContainer: "TestScreen",
	};

	constructor(props: INavigatorProps) {
		super(props);
		this.renderContainer = this.renderContainer.bind(this);
		this.navigate = this.navigate.bind(this);
	}

	private navigate(page: keyof IContainerSet): Promise<void> {
		const that: Navigator = this;
		return new Promise((resolve: () => void): void => {
			that.setState({currentContainer: page}, resolve);
		});
	}

	private renderContainer(): ReactNode {
		const props: IContainerProps = {
			navigate: this.navigate,
		};

		const pointer: any = containerSet[this.state.currentContainer];

		return React.createElement(pointer, props);
	}

	public render(): ReactNode {

		return (
			<View style={Navigator.style.topView}>
				{this.renderContainer()}
			</View>
		);
	}
}

interface IStyle {
	topView: ViewStyle;
}

interface INavigatorProps {

}

interface INavigatorState {
	currentContainer: keyof IContainerSet;
}
