import {Button, StyleSheet, Text, View} from "react-native";
import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CommonStyle} from "core/theme/styles/common.styles";
import {fetchDriverById} from "application/drivers.application";
import {IAppState} from "infrastructure/store";

type Props = {
    driverId: string;
    toResults: () => void;
}

export const DriverContainer: React.FC<Props> =
    ({driverId, toResults}) => {
        const dispatch = useDispatch();
        const detail = useSelector((state: IAppState) => state.drivers.detail);
        const onPressCallback = useCallback(() => toResults(), [driverId]);

        const fetch = () => {
            dispatch(fetchDriverById(driverId));
        }

        useEffect(() => {
            if (!driverId) return;
            fetch();
        }, [driverId])


        if (!detail)
            return null;

        const ButtonResults = (): React.ReactElement => {
            return (
                <Button title={'Результаты гонок'} onPress={onPressCallback}/>
            )
        }

        return (
            <View style={styles.content}>
                <Text
                    style={styles.pilotName}>{`${detail.familyName} ${detail.givenName}`}</Text>
                <Text>{`Национальность: ${detail.nationality}`}</Text>
                <Text>{`Дата рождения: ${detail.dateOfBirth}`}</Text>
                <Text>{`Code: ${detail.code}`}</Text>
                <Text>{`Номер: ${detail.permanentNumber}`}</Text>
                <ButtonResults/>
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