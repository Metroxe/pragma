import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import * as React from "react";
import DailySummaryInformationRow, {IDailySummaryInformationRowProps} from "./DailySummaryInformationRow";
import CoolYellowButton from "./CoolYellowButton";
import {IGameData} from "../services/GameData";

export default class DailySummaryPopUpContent extends EnhancedComponent<IDailySummaryPopUpContentProps, IDailySummaryPopUpContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "90%",
			height: "100%",
			alignSelf: "center",
			justifyContent: "space-around",
		},
	});

	private static buttonText: string = "Got it, Thanks!";

	constructor(props: IDailySummaryPopUpContentProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.handleClose = this.handleClose.bind(this);
		this.generateRows = this.generateRows.bind(this);
	}

	private handleClose(): void {
		// TODO hook up @Raymond
		// callback();

		this.props.closeModal();
	}

	public generateRows(): ReactNode[] {
		const gameData: IGameData = this.props.gameData;
		const output: ReactNode[] = [];

		let i: number;
		for (i = 0; i < gameData.summaryData.length; i++) {
			 const data: IDailySummaryInformationRowProps = gameData.summaryData[i];
			 output.push(<DailySummaryInformationRow image={data.image} text={data.text}/>);
		}

		return output;
	}

	public render(): ReactNode {
		const generatedRows: ReactNode[] = this.generateRows();

		return (
			<View style={DailySummaryPopUpContent.style.mainContainer}>
				<View>
					{generatedRows}
				</View>

				<View style={{marginTop: 15}}>
					<CoolYellowButton
						text={DailySummaryPopUpContent.buttonText}
						onAction={this.handleClose}
					/>
				</View>
			</View>
		);
	}
}

export interface IDailySummaryPopUpContentProps {
	closeModal: () => void;
	gameData?: IGameData;
}

export interface IDailySummaryPopUpContentState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
