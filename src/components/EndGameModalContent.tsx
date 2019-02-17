import {extends} from "tslint/lib/configs/latest";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import {Image, StyleSheet, View, ViewStyle} from "react-native";
import * as React from "react";
import CoolYellowButton from "./CoolYellowButton";

export default class EndGameModalContent extends EnhancedComponent<IEnhancedComponentsProps, IEndGameModalContentState> {

	private static victoryTitle: string = "You are victorious!";
	private static lossTitle: string = "You are defeated!";

	private static victoryContent: string = "You've successfully weathered years of dangerous, hostile threats on an alien planet and found your way back home! Maybe a nice bath and dinner back home on Earth is in short order?";

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "90%",
			height: "100%",
			alignSelf: "center",
			justifyContent: "space-around",
		},
		imageContainer: {
			height: 100,
			alignSelf: "center",
		},
		imageStyle: {
			height: "100%",
		}
	});

	public render(): ReactNode {
		return (
			<View>
				<View style={EndGameModalContent.style.imageContainer}>
					<Image
						source={require("../../../assets/images/Resource-Icons/pragma.png")}
						style={EndGameModalContent.style.imageStyle}
						resizeMode={"contain"}
					/>
				</View>

				<View>

				</View>

				<View>

				</View>

				<View>
					<CoolYellowButton

					/>
				</View>
			</View>
		);
	}
}

export interface IEndGameModalContentProps extends IEnhancedComponentsProps {

}

export interface IEndGameModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	imageContainer: ViewStyle;
	imageStyle: ViewStyle;
}
