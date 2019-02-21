import * as React from "react";
import {ReactNode} from "react";
import {Animated, View} from "react-native";
import {PopUp} from "./PopUp";

export default class EnhancedComponent<P extends IEnhancedComponentsProps, S extends IEnhancedComponentsState> extends React.PureComponent<P, S> {
	public static defaultProps: IEnhancedComponentsProps = {

	};

	public renderPointer: () => ReactNode;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {
			popUpShown: false,
			popUpOpacity: new Animated.Value(0.0),
		};
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
		this.showPopUp = this.showPopUp.bind(this);
		this.closePopUp = this.closePopUp.bind(this);
	}

	public showPopUp(): void {
		if (!this.state.popUpShown  && this.props.popUp) {
			console.log(this.state.popUpOpacity);
			Animated.timing(
				this.state.popUpOpacity,
				{
					toValue: 1.0,
					duration: 10000,
				},
			).start(() => {
				this.setState({popUpShown: true});
			});

		}
	}

	public closePopUp(): void {
		if (this.state.popUpShown && this.props.popUp) {
			this.setState({popUpShown: false}, () => {
				Animated.timing(
					this.state.popUpOpacity,
					{
						toValue: 0.0,
						duration: 5000,
					},
				).start();
			});
		}
	}

	public wrapRender(): void {
		this.renderPointer = this.render;
		this.render = (): ReactNode => {
			return (
				<View>
					{this.props.popUp &&
					<Animated.View style={{opacity: this.state.popUpOpacity, zIndex: 100}}>
						{this.props.popUp}
					</Animated.View>
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
	popUpOpacity: Animated.Value;
}
