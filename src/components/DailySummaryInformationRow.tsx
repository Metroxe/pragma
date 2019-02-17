import EnhancedComponent, {IEnhancedComponentsProps, IEnhancedComponentsState} from "./EnhancedComponent";
import {ReactNode} from "react";
import {Dimensions, Image, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import * as React from "react";

export default class DailySummaryInformationRow extends EnhancedComponent<IDailySummaryInformationRowProps, IDailySummaryInformationRowState> {

	public static defaultProps: IDailySummaryInformationRowProps = {
		image: require("../../assets/images/Resource-Icons/pragma.png"),
		text: "Replace Me!",
		textColor: "#00504D",
	};

	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			flexDirection: "row",
		},
		imageContainerA: {
			flex: 3,
			alignItems: "center",
			justifyContent: "center",
		},
		imageContainerB: {
			height: 40,
		},
		imageStyle: {
			height: "100%",
			maxWidth: "100%",
		},
		textContainer: {
			flex: 7,
			alignItems: "center",
			justifyContent: "center",
		},
		textStyle: {
			fontFamily: "Anchor",
			fontSize: 18,
		}
	});

	constructor(props: IDailySummaryInformationRowProps) {
		super(props);
		this.state = {
			...this.state,
		};
	}

	public render(): ReactNode {
		return (
			<View style={DailySummaryInformationRow.style.mainContainer}>
				<View style={DailySummaryInformationRow.style.imageContainerA}>
					<View style={DailySummaryInformationRow.style.imageContainerB}>
						<Image
							source={require("../../assets/images/Resource-Icons/pragma.png")}
							style={DailySummaryInformationRow.style.imageStyle}
							resizeMode={"contain"}
						/>
					</View>
				</View>
				<View style={DailySummaryInformationRow.style.textContainer}>
					<Text style={[DailySummaryInformationRow.style.textStyle, {color: this.props.textColor}]}>
						{this.props.text}
					</Text>
				</View>
			</View>
		);
	}
}

export interface IDailySummaryInformationRowProps extends IEnhancedComponentsProps {
	image: any;
	text: string;
	textColor?: string;
}

export interface IDailySummaryInformationRowState extends IEnhancedComponentsState {

}

interface IStyle {
	mainContainer: ViewStyle;
	imageContainerA: ViewStyle;
	imageContainerB: ViewStyle;
	imageStyle: any;
	textContainer: ViewStyle;
	textStyle: TextStyle;
}
