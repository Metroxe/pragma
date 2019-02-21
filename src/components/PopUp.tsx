import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, StyleSheet, View, ViewStyle} from "react-native";

export enum PopUpPositions {
	TL = "TL",
	TM = "TM",
	TR = "TR",
	BL = "BL",
	BM = "BM",
	BR = "BR",
}

export class PopUp extends React.PureComponent<IPopUpProps, IPopUpState> {
	public static defaultProps: IPopUpProps = {
		position: PopUpPositions.BL,
		innerComponent: <View/>,
	};
	public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		mainContainer: {
			position: "absolute",
			width: "90%",
			height: 154,
			margin: 20,
			backgroundColor: "#ff20bf",
			// mixBlendMode: "normal",
			// box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
			borderRadius: 20,
		},
		triangle: {
			position: "absolute",
			// left: 196,
			// top: 92,
			// box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),

			width: 0,
			height: 0,
			backgroundColor: "transparent",
			borderStyle: "solid",
			borderRightWidth: 25,
			borderTopWidth: 25,
			borderRightColor: "transparent",
			borderTopColor: "#ff20bf",
			transform: [{ rotateZ: "45deg" }],
		},
		shadowStyle: {
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 20 },
			shadowOpacity: 0.8,
			shadowRadius: 20,
			elevation: 1,
		},
		topStyle: {
			top: 60,
		},
		bottomStyle: {
			bottom: 180,
		},
	});

	private parentPosition: ViewStyle;
	private trianglePositions: ViewStyle;

	protected constructor(props: IPopUpProps) {
		super(props);
		this.state = {
			...this.state,
		};

		if (this.props.position[0] === "T") {
			// Triangle on top
			this.trianglePositions = {
				...this.trianglePositions,
				top: 14,
			};
			this.parentPosition = PopUp.style.topStyle;
		} else {
			// Triangle on the bottom
			this.trianglePositions = {
				...this.trianglePositions,
				transform:  [{ rotateZ: "225deg" }],
				top: 154,
			};
			this.parentPosition = PopUp.style.bottomStyle;
		}

		switch (this.props.position[1]) {
			case "L":
				this.trianglePositions = {
					...this.trianglePositions,
					left: Dimensions.get("screen").width / 6,
				};
				break;
			case "R":
				this.trianglePositions = {
					...this.trianglePositions,
					left: Dimensions.get("screen").width * 9 / 12,
				};
				break;
			default:
				// middle
				this.trianglePositions = {
					...this.trianglePositions,
					left: Dimensions.get("screen").width / 2,
				};
				break;
		}
	}

	public render(): ReactNode {
		return (
			<View style={this.parentPosition}>
				{/*<View*/}
					{/*style={{*/}
						{/*...PopUp.style.triangle,*/}
						{/*...this.trianglePositions,*/}
						{/*zIndex: 10,*/}
					{/*}}*/}
				{/*/>*/}
				<View
					style={{
						...PopUp.style.triangle,
						...PopUp.style.shadowStyle,
						...this.trianglePositions,
					}}
				/>
				<View
					style={{
						...PopUp.style.mainContainer,
						...PopUp.style.shadowStyle,
					}}
				>
					{this.props.innerComponent}
				</View>
			</View>
		);
	}
}

export interface IPopUpProps {
	position: PopUpPositions;
	innerComponent: ReactNode;
}

export interface IPopUpState {

}

interface IStyle {
	mainContainer: ViewStyle;
	triangle: ViewStyle;
	shadowStyle: ViewStyle;
	topStyle: ViewStyle;
	bottomStyle: ViewStyle;
}
