import * as React from "react";
import {ReactNode} from "react";
import {View} from "react-native";
import {PopUp} from "./PopUp";

export default class EnhancedComponent<P extends IEnhancedComponentsProps, S extends IEnhancedComponentsState> extends React.PureComponent<P, S> {

	public renderPointer: () => ReactNode;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {
			popUpShown: false,
		};
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
		this.showPopUp = this.showPopUp.bind(this);
	}

	protected showPopUp(): void {
		this.setState({popUpShown: true}, () => {
			this.props.popUp.animateShow();
		});
	}

	protected closePopUp(): void {
		this.setState({popUpShown: false}, () => {
			this.props.popUp.animateClose();
		});
	}

	public wrapRender(): void {
		this.renderPointer = this.render;
		this.render = (): ReactNode => {
			return (
				<View>
					{this.renderPointer()}
				</View>
			);
		};
	}
}

export interface IEnhancedComponentsProps {
	popUp?: PopUp;
}

export interface IEnhancedComponentsState {
	popUpShown: boolean;
}
