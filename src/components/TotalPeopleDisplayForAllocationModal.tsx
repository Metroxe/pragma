import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import * as React from "react";
import {Dimensions, Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";

export default class TotalPeopleDisplayForAllocationModal extends EnhancedComponent<ITotalPeopleDisplayForAllocationModalProps, IEnhancedComponentsState> {

	public static defaultProps: ITotalPeopleDisplayForAllocationModalProps = {
		peopleRemaining: 0,
		totalPeople: 100,
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			width: "100%",
			paddingVertical: 15,
			paddingHorizontal: 5,
		},
		innerContentContainer: {
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		imageContainerStyle: {
			height: 70,
			flex: 3,
		},
		remainingMessageContainer: {
			flex: 7,
			justifyContent: "center",
		},
		remainingMessageTextStyle: {
			color: "#111228",
			fontFamily: "Anchor",
			fontSize: 24,
			textAlign: "center",
		},
		decorationLine: {
			width: "95%",
			alignSelf: "center",
			backgroundColor: "#111228",
			height: 1,
			marginTop: 20,
		},
	});

	constructor(props: ITotalPeopleDisplayForAllocationModalProps) {
		super(props);

		this.createPeopleRemainingMessage = this.createPeopleRemainingMessage.bind(this);
	}

	private createPeopleRemainingMessage(): string {
		return this.props.peopleRemaining.toString() + " / " + this.props.totalPeople.toString() + " of your population available for work!";
	}

	public render(): ReactNode {
		const peopleRemainingString: string = this.createPeopleRemainingMessage();

		return (
			<View style={TotalPeopleDisplayForAllocationModal.style.mainContainer}>
				<View style={TotalPeopleDisplayForAllocationModal.style.innerContentContainer}>

					<View style={TotalPeopleDisplayForAllocationModal.style.imageContainerStyle}>
						<Image
							source={require("../../assets/images/Resource-Icons/people.png")}
							style={{height: "100%", maxWidth: "100%"}}
							resizeMode={"contain"}
						/>
					</View>

					<View style={TotalPeopleDisplayForAllocationModal.style.remainingMessageContainer}>
						<Text style={TotalPeopleDisplayForAllocationModal.style.remainingMessageTextStyle}>
							{peopleRemainingString}
						</Text>
					</View>

				</View>
				<View style={TotalPeopleDisplayForAllocationModal.style.decorationLine}/>
			</View>
		);
	}
}

export interface ITotalPeopleDisplayForAllocationModalProps extends IEnhancedComponentsProps {
	peopleRemaining: number;
	totalPeople: number;
}

export interface ITotalPeopleDisplayForAllocationModalState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	innerContentContainer: ViewStyle;
	imageContainerStyle: ViewStyle;
	remainingMessageContainer: ViewStyle;
	remainingMessageTextStyle: TextStyle;

	decorationLine: ViewStyle;
}
