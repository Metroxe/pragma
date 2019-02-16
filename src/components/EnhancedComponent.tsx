import * as React from "react";
import {ReactNode} from "react";
import {View} from "react-native";
import {PopUp} from "./PopUp";

export default class EnhancedComponent<P extends IEnhancedComponentsProps, S extends IEnhancedComponentsState> extends React.PureComponent<P, S> {
	public static defaultProps: IEnhancedComponentsProps = {

	};

	public renderPointer: () => ReactNode;
	private currentPopUpOpacity: number = 0;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {
			popUpShown: false,
		};
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
		this.showPopUp = this.showPopUp.bind(this);
		this.closePopUp = this.closePopUp.bind(this);
	}

	public showPopUp(): void {
		if (!this.state.popUpShown && this.props.popUp) {
			this.currentPopUpOpacity = 1.0;
			this.setState({popUpShown: true}, () => {
				this.currentPopUpOpacity = 1.0;
				this.forceUpdate();
			});
		}
	}

	public closePopUp(): void {
		if (this.state.popUpShown && this.props.popUp) {
			this.setState({popUpShown: false}, () => {
				this.currentPopUpOpacity = 0.0;
			});
		}
	}

	public wrapRender(): void {
		this.renderPointer = this.render;
		this.render = (): ReactNode => {
			return (
				<View>
					{this.props.popUp &&
					<View style={{opacity: 1.0, zIndex: 100}}>
						{this.props.popUp}
					</View>
					}
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
