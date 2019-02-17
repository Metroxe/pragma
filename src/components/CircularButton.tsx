import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, View, ViewStyle, Image} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";

export enum IconEnums {
	SETTINGS,
	
}

export class CircularButton extends EnhancedComponent<ICircularButtonProps, ICircularButtonState> {
	public static defaultProps: ICircularButtonProps = {
		radius: 15,
		image: "../../assets/images/Button-Icons/settings.png",
	};
	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		circle: {
			backgroundColor: "#ff20bf",
			borderRadius: 20,
			width: 10,
			height: 10,
		},
		shadowStyle: {
			shadowColor: "#000",
			shadowOffset: {width: 0, height: 20},
			shadowOpacity: 0.8,
			shadowRadius: 20,
			elevation: 1,
		},
	});

	protected constructor(props: ICircularButtonProps) {
		super(props);

		this.generateImage = this.generateImage.bind(this);
	}

	private generateImage(): ReactNode {
		return (<Image source={require("../../assets/images/Button-Icons/settings.png")}/>);
	}

	public render(): ReactNode {
		return (
			<View
				style={{
					...CircularButton.style.circle,
					...CircularButton.style.shadowStyle,
				}}
			>
				{this.generateImage()}
			</View>
		);
	}
}

export interface ICircularButtonProps extends IEnhancedComponentsProps {
	radius?: number;
	image: string; // path to image src
}

export interface ICircularButtonState extends IEnhancedComponentsState {

}

interface IStyle {
	circle: ViewStyle;
	shadowStyle: ViewStyle;
}
