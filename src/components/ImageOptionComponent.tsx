import {
	StyleSheet,
	View,
	Text,
	Image,
	ViewStyle,
	TextStyle,
	TouchableHighlight,
} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import * as React from "react";
import {ReactNode} from "react";

export class ImageOptionComponent extends EnhancedComponent<IImageOptionComponentsProps, IImageOptionComponentsState> {

	public static defaultProps: IImageOptionComponentsProps = {
		imageKey: "shop",
		onPress: (callback: () => void): void => {
		},
		label: "Shop",
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			display: "flex",
			flexDirection: "row",
		},
		imageContainer: {
			justifyContent: "center",
			alignItems: "center",
			height: 60,
			width: 60,
		},
		textContainer: {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",

		},
		textStyle: {
			fontFamily: "Anchor",
			fontSize: 21,
			textAlign: "center",
		},
	});

	protected static imgMap: { [key: string]: any } = {
		build: require("../../assets/icons/build.png"),
		shop: require("../../assets/icons/menu.png"),
		allocate: require("../../assets/icons/people.png"),
		next: require("../../assets/icons/next.png"),
	};

	constructor(props: IImageOptionComponentsProps) {
		super(props);
		this.onPressWrapper = this.onPressWrapper.bind(this);
	}

	private onPressWrapper(): void {
		this.props.onPress((): void => {});
	}

	public render(): ReactNode {
		return (
			<TouchableHighlight
				style={ImageOptionComponent.style.imageContainer}
				onPress={this.onPressWrapper}
			>
				<View>
					<Image
						style={{width: 70, height: 70}}
						resizeMode="contain"
						source={ImageOptionComponent.imgMap[this.props.imageKey]}
					/>
					<Text style={ImageOptionComponent.style.textStyle}>{this.props.label}</Text>
				</View>
			</TouchableHighlight>
		);

	}
}

export interface IImageOptionComponentsProps extends IEnhancedComponentsProps {
	onPress?: (callback: () => void) => void;
	imageKey?: string;
	label?: string;
}

export interface IImageOptionComponentsState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	imageContainer: ViewStyle;
	textContainer: TextStyle;
	textStyle: TextStyle;
}
