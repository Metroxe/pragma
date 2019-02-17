import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text, StyleSheet, Dimensions, ViewStyle} from "react-native";
import StartScreenInitialModalContent from "../../components/ModalContent/StartScreenInitialModalContent";
import TitleScreenInitialModalContent from "../../components/ModalContent/TitleScreenInitialModalContent";
import Video from "react-native-video";
import HowToPlayInitialModalContent from "../../components/ModalContent/HowToPlayInitialModalContent";
import CreditsInitialModalContent from "../../components/ModalContent/CreditsInitialModalContent";

export default class StartScreen extends Container<IStartScreenProps, IStartScreenState> {

	private static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			height: "100%",
			width: "100%",
		},
		videoStyle: {
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			width: Dimensions.get("screen").width,
			height: Dimensions.get("screen").height,
			// backgroundColor: Colours.logoVideoBackground,
		},
	});

	constructor(props: IStartScreenProps) {
		super(props);
		this.state = {
			...this.state,
			popUpModalContent: this.createInitialModalContent(),
		};

		this.showHeader = false;
		this.showNav = false;
		this.showResources = false;

		this.createInitialModalContent = this.createInitialModalContent.bind(this);
		this.videoError = this.videoError.bind(this);
	}

	private createInitialModalContent(): ReactNode {
		return (
			<TitleScreenInitialModalContent startScreen={this} />
		);
	}

	private videoError(e: any): void {
		console.log(e);
	}

	public navigateFromModal(name: string): (callback?: () => void) => void {
		let modal: ReactNode;
		switch (name) {
			case "menu":
				modal = (<StartScreenInitialModalContent startScreen={this} />);
				break;
			case "howtoplay":
				modal = (<HowToPlayInitialModalContent startScreen={this} />);
				break;
			case "credits":
				modal = (<CreditsInitialModalContent startScreen={this} />);
				break;
		}
		return (callback?: () => void): void => {
			this.setState({popUpModalContent: modal}, () => {
				/*if (callback) {
					callback();
				}*/
			});
		};
	}

	public render(): ReactNode {
		return (
			<View style={StartScreen.style.mainContainer}>
				<Video source={require("./../../../assets/menu_video.mp4")}   // Can be a URL or a local file.
					rate={1.0}
					style={StartScreen.style.videoStyle}
					resizeMode={"cover"}
					paused={false}
					repeat={true}
					playWhenInactive={true}
				/>
			</View>
		);
	}
}

export interface IStartScreenProps extends IContainerProps {

}

export interface IStartScreenState extends IContainerState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
