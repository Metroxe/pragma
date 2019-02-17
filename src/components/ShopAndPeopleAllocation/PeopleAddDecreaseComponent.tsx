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
	ScrollViewComponent,
	ScrollView, TouchableWithoutFeedbackComponent, TouchableOpacityComponent, TouchableOpacity,
} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import {ButtonWrapper, IButtonWrapperProps, IButtonWrapperState} from "../ButtonWrapper";
import ShopComponentItem from "./ShopComponentItem";
import PeopleAllocationItem from "./PeopleAllocationItem";

export default class PeopleAddDecreaseComponent extends EnhancedComponent<IPeopleAddDecreaseComponentProps, IPeopleAddDecreaseComponentState> {

	public static defaultProps: IPeopleAddDecreaseComponentProps = {
		text: "hey",
		increment: (): void => {},
		decrement: (): void => {},
	};

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		touchableStyle: {
			width: 30,
			height: 30,
			alignItems: "center",
			justifyContent: "center",
		},
		imageStyle: {
			width: 15,
			height: 15,
		},
		textNumberStyle: {
			color: "#111228",
			fontFamily: "Anchor",
			fontWeight: "bold",
			fontSize: 24,
		},
	});

	public render(): ReactNode {
		return (
			<View style={PeopleAddDecreaseComponent.style.mainContainer}>
				<View>
					<TouchableOpacity
						style={PeopleAddDecreaseComponent.style.touchableStyle}
						onPress={this.props.increment}
					>
						<Image
							source={require("../../../assets/images/blackTriangle.png")}
							style={PeopleAddDecreaseComponent.style.imageStyle}
							resizeMode={"contain"}
						/>
					</TouchableOpacity>
				</View>

				<View>
					<Text style={PeopleAddDecreaseComponent.style.textNumberStyle}>
						{this.props.text}
					</Text>
				</View>

				<View>
					<TouchableOpacity
						style={PeopleAddDecreaseComponent.style.touchableStyle}
						onPress={this.props.decrement}
					>
						<Image
							source={require("../../../assets/images/blackTriangle.png")}
							style={{
								...PeopleAddDecreaseComponent.style.imageStyle,
								transform: [
									{rotate: "180deg"},
								],
							}}
							resizeMode={"contain"}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export interface IPeopleAddDecreaseComponentProps extends IEnhancedComponentsProps {
	text: string;
	increment: () => void;
	decrement: () => void;
}

export interface IPeopleAddDecreaseComponentState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	touchableStyle: ViewStyle;
	imageStyle: ViewStyle;
	textNumberStyle: TextStyle;
}
