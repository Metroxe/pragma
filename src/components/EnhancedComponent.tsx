import * as React from "react";
import {ReactNode} from "react";
import {Text, View} from "react-native";

export default class EnhancedComponent<P extends IEnhancedComponentsProps, S extends IEnhancedComponentsState> extends React.PureComponent<P, S> {

	public renderPointer: () => ReactNode;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {};
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
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

}

export interface IEnhancedComponentsState {

}
