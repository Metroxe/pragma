import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet, Image} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import SilverModalButton from "../SilverModalButton";
import TitleScreen from "../../containers/Screens/TitleScreen";

export default class TitleScreenInitialModalContent extends EnhancedComponent<ITitleScreenInitialModalContentProps, ITitleScreenInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		logoStyle: {
			alignSelf: "center",
			marginBottom: 15,
			marginTop: 60,
		},
		logoImgStyle: {
			width: 120,
			height: 120,
		},
		titleStyle: {
			alignSelf: "center",
			marginBottom: 70,
		},
		btnContainerStyle: {
			width: "100%",
			borderColor: "green",
		},
		btnStyle: {
			alignSelf: "center",
			marginBottom: 15,
		},
	});

	public static btnText: string = "Play now";

	constructor(props: ITitleScreenInitialModalContentProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.btnCallback = this.btnCallback.bind(this);
	}

	public btnCallback(callback: () => void): void {
		callback();
	}

	public render(): ReactNode {

		return (
			<View>
				<View style={TitleScreenInitialModalContent.style.logoStyle}>
					<Image source={require("./../../../assets/images/pragmaLogo.png")} style={TitleScreenInitialModalContent.style.logoImgStyle} />
				</View>
				<View style={TitleScreenInitialModalContent.style.titleStyle}>
					<Image source={require("./../../../assets/images/pragmaTitle.png")} />
				</View>
				<View style={TitleScreenInitialModalContent.style.btnContainerStyle}>
					<SilverModalButton
						style={TitleScreenInitialModalContent.style.btnStyle}
						buttonText={TitleScreenInitialModalContent.btnText}
						onAction={this.btnCallback}
					/>
				</View>
			</View>
		);
	}
}

export interface ITitleScreenInitialModalContentProps extends IEnhancedComponentsProps {

}

export interface ITitleScreenInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
