import Container, {IContainerProps, IContainerState} from "../Container";
import * as React from "react";
import {ReactNode} from "react";
import {View} from "react-native";
import SilverModalButton from "../../components/SilverModalButton";
import {PopUp, PopUpPositions} from "../../components/PopUp";

export default class TestScreen extends Container<ITestScreenProps, ITestScreenState> {

	private buttonRef: SilverModalButton;
	private popUpRef: ReactNode = <PopUp position={PopUpPositions.TL}/>;

	protected constructor(props: ITestScreenProps) {
		super(props);
		this.state = {
			...this.state,
		};

		this.buttonOnClick = this.buttonOnClick.bind(this);
		this.saveButtonRef = this.saveButtonRef.bind(this);
	}

	private buttonOnClick(callback: () => void): void {
		// console.log("button clicked");
		if (this.buttonRef) {
			// console.log(this.buttonRef.props);
			this.buttonRef.showPopUp();
		}
		callback();
	}

	private saveButtonRef(ref: SilverModalButton): void {
		this.buttonRef = ref;
	}

	public render(): ReactNode {
		return (
			<View>
				<SilverModalButton
					ref={this.saveButtonRef}
					buttonText={"click me"}
					onAction={this.buttonOnClick}
					popUp={this.popUpRef as PopUp}
				/>
				{/*<PopUp position={PopUpPositions.BR}/>*/}
				{/*<Text>{JSON.stringify(this.props.gameData, null, 2)}</Text>*/}
				{/*<Text>{this.props.gameData.time}</Text>*/}
				{/*<Text>Test Screen 1</Text>*/}
			</View>
		);
	}
}

export interface ITestScreenProps extends IContainerProps {

}

export interface ITestScreenState extends IContainerState {

}
