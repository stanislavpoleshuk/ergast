import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {DriverScreen} from "screens/driver/driver.screen";
import {StandingsScreen} from "screens/standings/standings.screen";
import {RaceScreen} from "screens/race/race.screen";

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

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            options={{
                title: 'Турнирная таблица',
                headerLargeTitle: true,
            }}
            component={StandingsScreen}/>
        <Stack.Screen
            name="Driver"
            options={{
                title: 'Пилот',
                headerLargeTitle: true,
            }}
            component={DriverScreen}/>
        <Stack.Screen
            name="Races"
            options={{
                title: 'Результаты гонок',
                headerLargeTitle: true,
            }}
            component={RaceScreen}/>
    </Stack.Navigator>
)
