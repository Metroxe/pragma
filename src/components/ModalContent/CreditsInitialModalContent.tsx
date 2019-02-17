import {ReactNode} from "react";
import * as React from "react";
import {View, Text, TextStyle, StyleSheet, Image} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "../EnhancedComponent";
import SilverModalButton from "../SilverModalButton";
import TitleScreen from "../../containers/Screens/TitleScreen";

export default class CreditsInitialModalContent extends EnhancedComponent<ICreditsInitialModalContentProps, ICreditsInitialModalContentState> {

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		titleText: {
			textAlign: "center",
			color: "orange",
			fontSize: 26,
			fontWeight: "bold",
			fontFamily: "Anchor",
			marginBottom: 35,
		},
		creditsContentContainer: {
			width: 300,
			alignSelf: "center",
		},
		creditNamesContainer: {
			flexDirection: "row",
		},
		creditName: {
			fontSize: 14,
			fontFamily: "Anchor",
			color: "#fff",
		},
		creditNamesLeft: {
			width: "50%",
			flex: 1,
		},
		creditNamesRight: {
			width: "50%",
			flex: 1,
		},
		teamName: {
			fontSize: 14,
			fontFamily: "Anchor",
			color: "#fff",
			fontWeight: "bold",
			marginBottom: 25,
		},
		fkb: {
			fontSize: 14,
			fontFamily: "Anchor",
			color: "#fff",
			marginTop: 25,
		},
	});

	public static modalTitle: string = "Credits";
	public static creditsData: any = {
		leftSide: [
			"Christopher Powroznik",
			"Alice Hsieh",
			"Carolina Arai",
			"Jerry Kou",
			"Matt Chan",
			"Dan Murray - Audio",
		],
		rightSide: [
			"Perry Liao",
			"Raymond Chiu",
			"Spencer Gray",
			"Timothy Chang",
			"Tyler Onyschtschuk",
		],
	};

	constructor(props: ICreditsInitialModalContentProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.generateCreditsReactNodes = this.generateCreditsReactNodes.bind(this);
	}

	public generateCreditsReactNodes(): ReactNode {
		const leftNodes: ReactNode[] = [];
		const rightNodes: ReactNode[] = [];

		let i: number = 0;
		for (i = 0; i < CreditsInitialModalContent.creditsData.leftSide.length; i++) {
			const name: string = CreditsInitialModalContent.creditsData.leftSide[i];
			leftNodes.push(
				<Text
					style={CreditsInitialModalContent.style.creditName}
				>
					{name}
				</Text>,
			);
		}
		let j: number = 0;
		for (j = 0; j < CreditsInitialModalContent.creditsData.rightSide.length; j++) {
			const name: string = CreditsInitialModalContent.creditsData.rightSide[j];
			rightNodes.push(
				<Text
					style={{...CreditsInitialModalContent.style.creditName, textAlign: "right"}}>
					{name}
				</Text>,
			);
		}

		return (
			<View style={CreditsInitialModalContent.style.creditNamesContainer}>
				<View style={CreditsInitialModalContent.style.creditNamesLeft}>
					{leftNodes}
				</View>
				<View style={CreditsInitialModalContent.style.creditNamesRight}>
					{rightNodes}
				</View>
			</View>
		);

	}

	public render(): ReactNode {
		const creditsNodes: ReactNode = this.generateCreditsReactNodes();

		return (
			<View>
				<Text style={CreditsInitialModalContent.style.titleText}>
					{CreditsInitialModalContent.modalTitle}
				</Text>
				<View style={CreditsInitialModalContent.style.creditsContentContainer}>
					<Text style={CreditsInitialModalContent.style.teamName}>BC Game Jam 2019 - Team Ladner</Text>

					{creditsNodes}

					<Text style={CreditsInitialModalContent.style.fkb}>Fuck Bizhacks</Text>
				</View>
			</View>
		);
	}
}

export interface ICreditsInitialModalContentProps extends IEnhancedComponentsProps {

}

export interface ICreditsInitialModalContentState extends IEnhancedComponentsState {

}

interface IStyle {
	titleText: TextStyle;
}
