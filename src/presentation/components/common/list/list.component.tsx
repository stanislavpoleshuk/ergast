
import {StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {
    data: Array<any>;
}

type State = {

}

export class TableComponent<T> extends React.Component<Props, State> {
    render() {
        let {} = this.props;



        return (
            <View style={styles.content}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row"
    },
})