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
			display: "flex",
			flexDirection: "row",
		},
		imageContainer: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center"
		},
		textContainer: {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",

		},
	});

	constructor(props: IImageOptionComponentsProps) {
		super(props);
	}


	private static createImageElement(element: any, index: number): ReactNode {
		return (
			<View
				key={"element " + index}
				style={ImageOptionComponent.style.imageContainer}
			>

					<Image
						style={{width: 80, height: 80}}
						source={{uri: element.image}}
					/>
					<Text style={ImageOptionComponent.style.textContainer}>{element.label}</Text>
			</View>
		)
	}

	public render(): ReactNode {
		const tempElements: any = this.props.renderElement.map(ImageOptionComponent.createImageElement);
		return (
			<View style={ImageOptionComponent.style.mainContainer}>
				{tempElements}
			</View>
		);

	}
}

interface IRenderElement {
	label: string;
	image: string;
}

export interface IImageOptionComponentsProps extends IButtonWrapperProps {
	renderElement: IRenderElement[];
}

export interface IImageOptionComponentsState extends IButtonWrapperState {

}

interface IStyle {
	mainContainer: ViewStyle;
	imageContainer: ViewStyle;
	textContainer: TextStyle;
}
