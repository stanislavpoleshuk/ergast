import {StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchStandings} from "application/standings.application";
import {StandingsTable} from "screens/standings/extra/standings.table";
import {CommonStyle} from "core/theme/styles/common.styles";
import {DriverModel} from "models/driver.model";

type Props = {
    toPilotDetail: (driver: DriverModel)=> void;
}

export const StandingsContainer: React.FC<Props> =
    ({toPilotDetail}) => {
    const dispatch = useDispatch();

    const initDataTable = () => {
        dispatch(fetchStandings());
    }

    useEffect(() => {
        initDataTable();
    }, [])

    return (
        <View style={styles.content}>
            <StandingsTable
                onItemPress={toPilotDetail}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        ...CommonStyle.content,

    },
})