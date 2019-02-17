import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";

export class PopUp extends EnhancedComponent<IPopUpProps, IPopUpState> {

	public static defaultProps: IPopUpProps = {

	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			position: "absolute",
			width: 358,
			height: 154,
			left: 34,
			top: 105,
			backgroundColor: "#FFFFFF",
			// mixBlendMode: "normal",
			// box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
			borderRadius: 20,
		},
	});

	public constructor(props: IPopUpProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.animateShow = this.animateShow.bind(this);
		this.animateClose = this.animateClose.bind(this);
	}

	public animateShow(): void {

	}

	public animateClose(): void {

	}

	public render(): ReactNode {
		return (
			<View style={PopUp.style.mainContainer}/>
		);
	}
}

export interface IPopUpProps extends IEnhancedComponentsProps {

}

export interface IPopUpState extends IEnhancedComponentsProps {

}

interface IStyle {
	mainContainer: ViewStyle;
}
