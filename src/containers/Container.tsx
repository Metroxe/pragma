import * as React from "react";
import {ReactNode} from "react";
import {Dimensions, StyleSheet, Text, View, ViewStyle} from "react-native";
import {IContainerSet} from "./index";
import {IGameData} from "../services/GameData";
import {IGameFunctions} from "../services/GameFunctions";
import {IPagePackager, TabNavigator} from "../components/TabNavigator";
import {Header} from "../components/Header";
import LinearGradient from "react-native-linear-gradient";

export default class Container<P extends IContainerProps, S extends IContainerState> extends React.PureComponent<P, S> {

	private static containerStyle: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
		topView: {
			backgroundColor: "white",
			// flex: 1,
			height: Dimensions.get("screen").height,
			width: Dimensions.get("screen").width,
		},
		grayOverlay: {
			width: "100%",
			height: "100%",
			backgroundColor: "black",
			opacity: 0.5,
			position: "absolute",
			zIndex: 99999,
		},
		popUpModalContainer: {
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			zIndex: 100000,
		},
		popUpModal: {
			backgroundColor: "#303379",
			borderRadius: 15,
			padding: 40,
			width: "95%",
		},
	});

	private static pagesArray: IPagePackager[] = [
		{
			pageString: "Grid",
			displayString: "Map",
		},
		{
			pageString: "AllocatePeopleScreen",
			displayString: "Allocate",
		},
		{
			pageString: "ShopScreen",
			displayString: "ShopScreen",
		},
		{
			pageString: "TestScreen",
			displayString: "TestScreen",
		},
	];

	public renderPointer: () => ReactNode;

	protected popUpModalHeight: number = null;

	protected headerTitle: string = "";

	protected showHeader: boolean = true;
	protected showNav: boolean = true;

	constructor(props: P) {
		super(props);

		// @ts-ignore
		this.state = {
			// popUpModalContent: (
			// 	<View>
			// 		<Text>
			// 			hello slots!
			// 		</Text>
			// 	</View>
			// ),
		};
		this.determineContentHeight = this.determineContentHeight.bind(this);
		this.wrapRender = this.wrapRender.bind(this);
		this.wrapRender();
	}

	private determineContentHeight(): number {
		let baseHeight: number = Dimensions.get("screen").height;

		// console.log("state:", this.state);
		// console.log("base height:", baseHeight);

		if (this.showHeader) {
			baseHeight = baseHeight - Header.headerHeight;
		}

		if (this.showNav) {
			baseHeight = baseHeight - TabNavigator.navBarHeight;
		}

		// console.log("base height 2:", baseHeight);

		return baseHeight;
	}

	public wrapRender(): void {

		this.renderPointer = this.render;
		this.render = (): ReactNode => {

			const contentHeight: number = this.determineContentHeight();

			return (
				<View style={Container.containerStyle.topView}>
					<Header
						title={Container.pagesArray[Container.pagesArray.findIndex((property: IPagePackager) => property.pageString === this.props.currentPage.toString())].displayString}
					/>

					<View
						style={{height: Dimensions.get("screen").height - Header.headerHeight - TabNavigator.navBarHeight}}
					>
						{this.renderPointer()}
					</View>

					{this.state.popUpModalContent &&
					<View style={Container.containerStyle.grayOverlay}/>
					}

					{this.state.popUpModalContent &&
					<View style={Container.containerStyle.popUpModalContainer}>
						<View style={{...Container.containerStyle.popUpModal, height: this.popUpModalHeight}}>
							{this.state.popUpModalContent}
						</View>
					</View>
					}

					{this.showHeader &&
					<Header
						title={this.headerTitle}
					/>
					}

					<View style={{height: contentHeight}}>
						{this.renderPointer()}
					</View>

					{this.showNav &&
					<TabNavigator
						tabOptions={Container.pagesArray}
						navigate={this.props.navigate}
					/>
					}
				</View>
			);
		};
	}

}

interface IStyle {
	topView: ViewStyle;
	grayOverlay: ViewStyle;
	popUpModalContainer: ViewStyle;
	popUpModal: ViewStyle;
}

export interface IContainerProps {
	navigate: (page: keyof IContainerSet) => Promise<void>;
	gameData: IGameData;
	gameFunctions: IGameFunctions;
	currentPage: keyof IContainerSet;
}

export interface IContainerState {
	popUpModalContent: ReactNode;
}
