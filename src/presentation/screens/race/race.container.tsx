import {StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {CommonStyle} from "core/theme/styles/common.styles";
import {fetchDriverRaces} from "application/drivers.application";
import {RaceTable} from "screens/race/extra/race.table";

type Props = {
    driverId: string;
}

export const RaceContainer: React.FC<Props> =
    ({driverId}) => {
        const dispatch = useDispatch();
        const fetch = () => {
            dispatch(fetchDriverRaces(driverId));
        }

        useEffect(() => {
            if (!driverId) return;
            fetch();
        }, [driverId])

        return (
            <View style={styles.content}>
                <RaceTable/>
            </View>
        )
    }

const styles = StyleSheet.create({
    content: {
        flex: 1,
        ...CommonStyle.content,
    },
    pilotName: {
        fontWeight: "bold"
    },
})