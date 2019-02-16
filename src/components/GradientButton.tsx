import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";

export class GradientButton extends EnhancedComponent<IGradientButtonProps, IGradientButtonState> {

	public static defaultProps: IGradientButtonProps = {
		title: "HEADER",
		bgColor: "green",
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		linearGradient: {
			flex: 1,
			paddingLeft: 15,
			paddingRight: 15,
			borderRadius: 5,
		},
	});

	public render(): ReactNode {
		return (
			<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
				<Text style={styles.buttonText}>
					Sign in with Facebook
				</Text>
			</LinearGradient>
		);
	}
}

export interface IGradientButtonProps extends IEnhancedComponentsProps {

}

export interface IGradientButtonState extends IEnhancedComponentsProps {

}

interface IStyle {
	linearGradient: ViewStyle;
}
