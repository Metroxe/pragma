import Container, {IContainerProps, IContainerState} from "../Container";
import {ReactNode} from "react";
import * as React from "react";
import {View, Text} from "react-native";
import {TabNavigator} from "../../components/TabNavigator";

export default class ShopScreen extends Container<IShopScreenProps, IShopScreenState> {

    public render(): ReactNode {
        return (
            <View style={{marginTop: 20}}>
                <Text>
                    shop screen>
                </Text>
            </View>
        );
    }
}

export interface IShopScreenProps extends IContainerProps {

}

export interface IShopScreenState extends IContainerState {

}
