import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import SilverModalButton from "../SilverModalButton";
import StartScreen from "../../containers/Screens/StartScreen";

export default class StartScreenInitialModalContent extends EnhancedComponent<IStartScreenInitialModalContentProps, IStartScreenInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		titleText: {
			textAlign: "center",
			color: "orange",
			fontSize: 26,
			fontWeight: "bold",
			fontFamily: "Anchor",
		},
	});

	private static modalTitle: string = "Select an option";

	private initialModalButtons: IInitialModalButtons[] = [
		{
			text: "New Game",
			callback: this.newGame.bind(this),
		},
		{
			text: "How To Play",
			callback: this.howToPlay.bind(this),
		},
		{
			text: "Credits",
			callback: this.credits.bind(this),
		},
		{
			text: "Quit",
			callback: this.quit.bind(this),
		},
	];

	constructor(props: IStartScreenInitialModalContentProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.createButtons = this.createButtons.bind(this);
	}

	private newGame(callback: () => void): void {
		callback();
		this.props.startScreen.props.navigate("Grid");
	}

	private howToPlay(callback: () => void): void {
		this.props.startScreen.navigateFromModal("howtoplay")(callback);
	}

	private credits(callback: () => void): void {
		this.props.startScreen.navigateFromModal("credits")(callback);
	}

	private quit(callback: () => void): void {
		callback();
		// TODO need native functionality for this?
	}

	private createButtons(buttons: IInitialModalButtons[]): ReactNode {
		return buttons.map((button: IInitialModalButtons, i: number) => {
			return (
				<View key={"silverButton" + i} style={{marginTop: 25}}>
					<SilverModalButton
						buttonText={button.text}
						onAction={button.callback}
					/>
				</View>
			);
		});
	}

	public render(): ReactNode {

		const buttons: ReactNode = this.createButtons(this.initialModalButtons);

		return (
			<View>
				<Text style={StartScreenInitialModalContent.style.titleText}>
					{StartScreenInitialModalContent.modalTitle}
				</Text>
				<View style={{alignItems: "center"}}>
					{buttons}
				</View>
			</View>
		);
	}
}

export interface IInitialModalButtons {
	text: string;
	callback: any;
}

export interface IStartScreenInitialModalContentProps extends IEnhancedComponentsProps {
	startScreen: StartScreen;
}

export interface IStartScreenInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
