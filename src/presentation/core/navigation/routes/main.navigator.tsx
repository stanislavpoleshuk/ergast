import React from "react";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {HomeNavigator} from "core/navigation/routes/home.navigator";

const Stack = createNativeStackNavigator();

const initialTabRoute: string = 'Main';

export const MainNavigator = (): React.ReactElement => {
    return (
        <Stack.Navigator
            initialRouteName={initialTabRoute}
            screenOptions={{
                headerShown: false,

            }}
        >
            <Stack.Screen name={'Home'} component={HomeNavigator}/>
        </Stack.Navigator>
    );
}