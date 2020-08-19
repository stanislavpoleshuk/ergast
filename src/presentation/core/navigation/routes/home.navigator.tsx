import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {DriverScreen} from "screens/driver/driver.screen";
import {StandingsScreen} from "screens/standings/standings.screen";
import {RaceScreen} from "screens/race/race.screen";
import {Platform} from "react-native";

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
    Home: undefined;
    Driver: {
        driverId: string;
    };
    Races: {
        driverId: string;
    }
};

const baseOptions = {
    headerLargeTitle: true
}

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            options={{
                ...baseOptions,
                title: 'Турнирная таблица',
            }}
            component={StandingsScreen}/>
        <Stack.Screen
            name="Driver"
            options={{
                ...baseOptions,
                title: 'Пилот',
            }}
            component={DriverScreen}/>
        <Stack.Screen
            name="Races"
            options={{
                ...baseOptions,
                title: 'Результаты гонок',
            }}
            component={RaceScreen}/>
    </Stack.Navigator>
)
