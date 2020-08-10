import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {RaceModel} from "models/race.model";

type Props = {
    item: RaceModel;
}

export const ItemRace: React.FC<Props> =
    ({item}) => {

        const Results = (): React.ReactElement => {
            if (!item.Results || item.Results.length < 1)
                return null;
            const result = item.Results[0];
            return (
                <View style={styles.positionContainer}>
                    <Text style={styles.position}>Место: {result.position}</Text>
                    <Text>{`К-во очков: ${result.points}`}</Text>
                    <Text style={styles.status}>{`Статус: ${result.status}`}</Text>
                </View>
            )
        }

        const Info = (): React.ReactElement => {
            return (
                <View style={styles.container}>
                    <Text>{`Трасса: ${item.raceName}`}</Text>
                    <Text>{`Сезон: ${item.season}`}</Text>
                    <Text>{`Дата: ${item.date}`}</Text>
                </View>
            )
        }

        return (
            <View style={styles.content}>
                <Results/>
                <Info/>
            </View>
        )
    }

const styles = StyleSheet.create({
    content: {
        justifyContent: "space-between",
        paddingBottom: 10
    },
    positionContainer: {
    },
    position: {
        fontWeight: "bold"
    },
    container: {
        flex: 1,
    },
    status: {
        fontStyle: "italic"
    }
})