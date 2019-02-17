import EnhancedComponent from "./EnhancedComponent";
import {ReactNode} from "react";
import {StyleSheet, Text, View, ViewStyle} from "react-native";
import * as React from "react";
import DailySummaryInformationRow from "./DailySummaryInformationRow";
import CoolYellowButton from "./CoolYellowButton";

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
	}

	private handleClose(callback: () => void): void {
		// TODO hook up @Raymond
		callback();

		this.props.closeModal(callback);
	}

	public render(): ReactNode {
		return (
			<View style={DailySummaryPopUpContent.style.mainContainer}>
				<View>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
					<DailySummaryInformationRow/>
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
	closeModal: (callback: () => void) => void;
}

export interface IDailySummaryPopUpContentState {

}

interface IStyle {
	mainContainer: ViewStyle;
}
