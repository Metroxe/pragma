import {StyleSheet, View, Text} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";
import * as React from "react";
import {ReactNode} from "react";

export class ImageOptionComponent extends EnhancedComponent<IImageOptionComponentProps, IImageOptionComponentState> {

	public static defaultProps: IImageOptionComponentProps = {

	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({

	});

	public static headerHeight: number = 60;

	public render(): ReactNode {
		return (
			<View>
				<Text>faoisdjgaisjdgoaisdogiajsjdg</Text>
				<Text>asdhasdga</Text>
			</View>
		)
	}
}

export interface IImageOptionComponentProps extends IEnhancedComponentsProps {

}

export interface IImageOptionComponentState extends IEnhancedComponentsProps {

}

interface IStyle {

}
