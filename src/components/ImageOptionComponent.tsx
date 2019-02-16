import {StyleSheet, View, Text, Image, ViewStyle, TextStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import * as React from "react";
import {ReactNode} from "react";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";

export class ImageOptionComponent extends ButtonWrapper<IImageOptionComponentsProps, IImageOptionComponentsState> {

	public static defaultProps: IImageOptionComponentsProps = {
		renderElement: null,
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
			display: "flex",
		},

		textContainer: {
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",

		},
	});

	constructor(props: IImageOptionComponentsProps) {
		super(props);
	}


	private static createImageElement(element: any, index: number): ReactNode {
		console.log("element:", element);
		console.log("index:", index);
		return (
			<View
				key={"element " + index}
				style={ImageOptionComponent.style.mainContainer}>
				<Image
					style={{width: 100, height: 100}}
					source={{uri: element.image}}
				/>
				<Text style={ImageOptionComponent.style.textContainer}>{element.label}</Text>
			</View>
		)
	}

	public render(): ReactNode {
		const tempElements: any = this.props.renderElement.map(ImageOptionComponent.createImageElement);
		return (
			<View>
				{tempElements}
			</View>
		);

	}
}

export interface IImageOptionComponentsProps extends IButtonWrapperProps {
	renderElement: any;
}

export interface IImageOptionComponentsState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;
	textContainer: TextStyle;
}
