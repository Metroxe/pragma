import * as React from "react";
import {ReactNode} from "react";
import {StyleSheet, Text, TouchableOpacity, View, ViewStyle} from "react-native";
import EnhancedComponent, {IEnhancedComponentsProps} from "./EnhancedComponent";

export class Header extends EnhancedComponent<IHeaderProps, IHeaderState> {

    public static defaultProps: IHeaderProps = {
        title: "HEADER",
        bgColor: "green",
    };

    public static style: StyleSheet.NamedStyles<IStyle> = StyleSheet.create<IStyle>({
        mainContainer: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
    });

    public static headerHeight: number = 60;

    public render(): ReactNode {
        return (
            <View style={{...Header.style.mainContainer, height: Header.headerHeight, backgroundColor: this.props.bgColor}}>
                <Text>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export interface IHeaderProps extends IEnhancedComponentsProps {
    title: string;
    bgColor: string;
}

export interface IHeaderState extends IEnhancedComponentsProps {

}

interface IStyle {
    mainContainer: ViewStyle;
}
