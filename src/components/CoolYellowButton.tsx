import {ReactNode} from "react";
import * as React from "react";
import {
	Image,
	View,
	Text,
	StyleSheet,
	Dimensions,
	TextStyle,
	ViewStyle,
	ImageStyle,
	TouchableOpacity
} from "react-native";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "./ButtonWrapper";
import EnhancedComponent from "./EnhancedComponent";
import {IEnhancedComponentProps, IEnhancedComponentState} from "../../../Senketsu/app/src/Components/EnhancedComponent";

export default class CoolYellowButton extends EnhancedComponent<ICoolYellowButtonProps, ICoolYellowButtonState> {

	public static defaultProps: ICoolYellowButtonProps = {
		text: "Replace Me!",
		bgColor: "#FBAE34",
		viewStyle: {},
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			paddingHorizontal: 20,
			paddingVertical: 10,
			borderRadius: 20,
			alignItems: "center",
			alignSelf: "center",
		},
		textStyle: {
			fontFamily: "Anchor",
			fontSize: 24,
			color: "black",
		},
	});

	constructor(props: ICoolYellowButtonProps) {
		super(props);
		this.state = {
			...this.state,
		};
	}

	public render(): ReactNode {
		return (
			<TouchableOpacity onPress={this.props.onAction} style={[CoolYellowButton.style.mainContainer, {backgroundColor: this.props.bgColor}, this.props.viewStyle]}>
				<Text style={CoolYellowButton.style.textStyle}>
					{this.props.text}
				</Text>
			</TouchableOpacity>
		);
	}
}

export interface ICoolYellowButtonProps extends IEnhancedComponentProps {
	text: string;
	bgColor: string;
	onAction: () => void;
	viewStyle: ViewStyle;
}

export interface ICoolYellowButtonState extends IEnhancedComponentState {

}

interface IStyle {
	mainContainer: ViewStyle;
	textStyle: TextStyle;
}
