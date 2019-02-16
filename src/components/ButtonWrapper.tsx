import {ReactNode} from "react";
import * as React from "react";
import {TouchableOpacity, View} from "react-native";
import EnhancedComponent from "./EnhancedComponent";

abstract class ButtonWrapper<P extends IButtonWrapperProps, S extends IButtonWrapperState> extends EnhancedComponent<P, S> {

	public static defaultProps: IButtonWrapperProps = {
		onAction: (callback: () => void): void => {
			callback();
		},
		disabled: false,
	};

	protected renderFunctionPointer: () => ReactNode;

	constructor(props: P) {
		super(props);

		this.state = {
			// @ts-ignore
			...this.state,
			disabled: false,
			pressed: false,
			touchableWrap: false,
		};
		this.onActionWrapper = this.onActionWrapper.bind(this);
		this.wrapRenderButton = this.wrapRenderButton.bind(this);
		this.onPressIn = this.onPressIn.bind(this);
		this.onPressOut = this.onPressOut.bind(this);
	}

	public componentWillMount(): void {
		this.renderFunctionPointer = this.render;
		this.wrapRenderButton();
	}

	private onActionWrapper(): void {
		if (!this.state.disabled && !this.props.disabled) {
			this.setState({disabled: true}, () => {
				this.props.onAction(() => {
					this.setState({disabled: false});
				});
			});
		}
	}

	private onPressIn(): void {
		this.setState({pressed: true});
	}

	private onPressOut(): void {
		this.setState({pressed: false});
	}

	private wrapRenderButton(): void {
		this.render = (): ReactNode => {
			return (
				<TouchableOpacity
					activeOpacity={0.75}
					onPress={this.onActionWrapper}
					onPressIn={this.onPressIn}
					onPressOut={this.onPressOut}
					disabled={this.props.disabled ? this.props.disabled : this.state.disabled}
				>
					<View>
						{this.renderFunctionPointer()}
					</View>
				</TouchableOpacity>
			);
		};
	}
}

export interface IButtonWrapperProps {
	onAction?: (callback: () => void) => void;
	disabled?: boolean;
}

export interface IButtonWrapperState {
	disabled: boolean;
	pressed: boolean;
}

export {ButtonWrapper};
