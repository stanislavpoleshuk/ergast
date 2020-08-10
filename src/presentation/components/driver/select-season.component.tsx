import {StyleSheet, Text, View, ViewProps} from "react-native";
import React, {useState} from "react";
import DropDownPicker from 'react-native-dropdown-picker';

interface ComponentProps {
    tintColor?: string
}

export type SelectSeasonProps = ViewProps & ComponentProps;

export const SelectSeason: React.FC<SelectSeasonProps> =
    ({}) => {
        const [season, setSeason] = useState<string>(undefined);
        return (
            <View style={styles.container}>
                <DropDownPicker
                    items={[
                        {label: 'UK', value: 'uk'},
                        {label: 'France', value: 'france'},
                    ]}
                    defaultValue={season}
                    placeholder={'Сессия'}
                    containerStyle={{height: 30}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>
                        setSeason(item.value)
                    }
                />
            </View>
        );
    };


const styles = StyleSheet.create({
    container: {
        width: 100
    },
    toggle: {}
})
