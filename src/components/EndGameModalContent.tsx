import {extends} from "tslint/lib/configs/latest";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import * as React from "react";
import CoolYellowButton from "./CoolYellowButton";

export default class EndGameModalContent extends EnhancedComponent<IEndGameModalContentProps, IEndGameModalContentState> {

	public static defaultProps: IEndGameModalContentProps = {
		victory: true,
	};

	private static victoryImageSource: any = require("../../assets/images/trophy.png");
	private static lossImageSource: any = require("../../assets/images/skull.png");

	private static victoryTitle: string = "You are victorious!";
	private static lossTitle: string = "You are defeated!";

	private static victoryContent: string = "You've successfully weathered years of dangerous, hostile threats on an alien planet and found your way back home! Maybe a nice bath and dinner back home on Earth is in short order?";
	private static lossContent: string = "The harsh, dangerous threats on this planet proved too much for you and your shipwrecked crew of space driftabouts. Perhaps you shouldn't have left Earth in the first place";

	private static victoryButtonText: string = "YEAH!";
	private static lossButtonText: string = "Oof...";

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "90%",
			height: "100%",
			alignSelf: "center",
			justifyContent: "center",
		},
		imageContainer: {
			height: 100,
			alignSelf: "center",
		},
		imageStyle: {
			height: "100%",
		},
		titleContainer: {
			alignSelf: "center",
			marginTop: 30,
		},
		titleTextStyle: {
			fontFamily: "Anchor",
			fontSize: 42,
			textAlign: "center",
		},
		contentContainer: {
			alignSelf: "center",
			marginTop: 30,
		},
		contentTextStyle: {
			fontFamily: "Anchor",
			fontSize: 24,
			color: "#111228",
		},
		buttonContainer: {
			alignSelf: "center",
			marginTop: 30,
		},
	});

	public render(): ReactNode {
		return (
			<View style={EndGameModalContent.style.mainContainer}>
				<View style={EndGameModalContent.style.imageContainer}>
					<Image
						source={this.props.victory ? EndGameModalContent.victoryImageSource : EndGameModalContent.lossImageSource}
						style={EndGameModalContent.style.imageStyle}
						resizeMode={"contain"}
					/>
				</View>

				<View style={EndGameModalContent.style.titleContainer}>
					<Text style={[EndGameModalContent.style.titleTextStyle, {color: this.props.victory ? "#FBAE34" : "#DB1D61"}]}>
						{this.props.victory ? EndGameModalContent.victoryTitle : EndGameModalContent.lossTitle}
					</Text>
				</View>

				<View  style={EndGameModalContent.style.contentContainer}>
					<Text style={EndGameModalContent.style.contentTextStyle}>
						{this.props.victory ? EndGameModalContent.victoryContent : EndGameModalContent.lossContent}
					</Text>
				</View>

				<View style={EndGameModalContent.style.buttonContainer}>
					<CoolYellowButton
						text={this.props.victory ? EndGameModalContent.victoryButtonText : EndGameModalContent.lossButtonText}
						bgColor={this.props.victory ? "#FBAE34" : "#DB1D61"}
						viewStyle={{width: 200}}
					/>
				</View>
			</View>
		);
	}
}

export interface IEndGameModalContentProps extends IEnhancedComponentsProps {
	victory: boolean;
}

export interface IEndGameModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	imageContainer: ViewStyle;
	imageStyle: ViewStyle;
	titleContainer: ViewStyle;
	titleTextStyle: TextStyle;
	contentContainer: ViewStyle;
	contentTextStyle: TextStyle;
	buttonContainer: ViewStyle;
}
