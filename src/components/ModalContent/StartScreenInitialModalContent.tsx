import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import SilverModalButton from "../SilverModalButton";

export default class StartScreenInitialModalContent extends EnhancedComponent<IStartScreenInitialModalContentProps, IStartScreenInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		titleText: {
			textAlign: "center",
			color: "orange",
			fontSize: 25,
			fontWeight: "bold",
		},
	});

	private static modalTitle: string = "Select an option";

	private initialModalButtons: IInitialModalButtons[] = [
		{
			text: "New Game",
			callback: this.newGame,
		},
		{
			text: "How To Play",
			callback: this.howToPlay,
		},
		{
			text: "Credits",
			callback: this.credits,
		},
		{
			text: "Quit",
			callback: this.quit,
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
		alert("new");
		callback();
	}

	private howToPlay(callback: () => void): void {
		callback();
	}

	private credits(callback: () => void): void {
		callback();
	}

	private quit(callback: () => void): void {
		callback();
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

}

export interface IStartScreenInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
