import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet, Image} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import SilverModalButton from "../SilverModalButton";
import StartScreen from "../../containers/Screens/StartScreen";

export default class HowToPlayInitialModalContent extends EnhancedComponent<IHowToPlayInitialModalContentProps, IHowToPlayInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		titleText: {
			textAlign: "center",
			color: "orange",
			fontSize: 26,
			fontWeight: "bold",
			fontFamily: "Anchor",
			marginBottom: 35,
		},
		howToPlayText: {
			fontSize: 14,
			fontFamily: "Anchor",
			color: "#fff",
			width: 200,
			marginLeft: 15,
		},
	});

	public static modalTitle: string = "How To Play";
	public static pageOne: ReactNode = (
		<Text style={HowToPlayInitialModalContent.style.howToPlayText}>
			A black-hole is expanding and destroying the galaxy. You wanted to escape, and you crashed on a strange planet. Your main goal is to rebuild your spaceship and escape as soon as possible.{"\n\n"}
			You can use the resources of the planet to unlock new buildings and technologies associated with the buildings. Will your colony be subjected to the same fate? Or will you make it out of the galaxy before the black hole consumes all?{"\n\n"}
			Time is counting down.
		</Text>
	);

	constructor(props: IHowToPlayInitialModalContentProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.btnCallback = this.btnCallback.bind(this);
	}

	public btnCallback(callback: () => void): void {
		this.props.startScreen.navigateFromModal("menu")(callback);
	}

	public render(): ReactNode {

		return (
			<View>
				<Text style={HowToPlayInitialModalContent.style.titleText}>
					{HowToPlayInitialModalContent.modalTitle}
				</Text>
				{HowToPlayInitialModalContent.pageOne}
			</View>
		);
	}
}

export interface IHowToPlayInitialModalContentProps extends IEnhancedComponentsProps {
	startScreen: StartScreen;
}

export interface IHowToPlayInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
