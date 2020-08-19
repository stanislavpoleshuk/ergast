import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback} from "react";
import {DriverStandingModel} from "models/standing.model";
import {DriverModel} from "models/driver.model";

type Props = {
    item: DriverStandingModel;
    onPress: (driver: DriverModel) => void;
}

export const ItemStanding: React.FC<Props> =
    ({item, onPress}) => {
        const onPressCallback = useCallback(() => onPress(item.Driver), [item.Driver.code]);

        const positionStyle = (position: number) => {
            if (position > 3)
                return null;
            switch (position) {
                case 1: {
                    return {
                        backgroundColor: 'gold'
                    }
                }
                case 2: {
                    return {
                        backgroundColor: 'silver'
                    }
                }
                case 3: {
                    return {
                        backgroundColor: '#e7a538'
                    }
                }
            }
        }

        const Position = (): React.ReactElement => {
            return (
                <View style={styles.positionContainer}>
                    <View style={[styles.position, positionStyle(+item.position)]}><Text>{item.position}</Text></View>
                </View>
            )
        }

        const Container = (): React.ReactElement => {
            const constructor = item.Constructors[0];
            return (
                <View style={styles.container}>
                    <Text
                        style={styles.pilotName}>{`Пилот: ${item.Driver.familyName} ${item.Driver.givenName} (${item.Driver.nationality})`}</Text>
                    <Text>{`Очки: ${item.points} / К-во побед: ${item.wins}`}</Text>
                    <Text>Конструктор: <Text
                        style={styles.constructorName}>{constructor.name}</Text> ({constructor.nationality})</Text>
                </View>
            )
        }

        return (
            <TouchableOpacity style={styles.content} onPress={onPressCallback}>
                <Position/>
                <Container/>
            </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    positionContainer: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center",
    },
    position: {
        backgroundColor: '#7d7d7d',
        borderRadius: 5,
        padding: 10
    },
    container: {
        flex: 1,
        paddingLeft: 15
    },
    pilotName: {
        fontWeight: "bold"
    },
    constructorName: {
        fontStyle: "italic"
    }
})