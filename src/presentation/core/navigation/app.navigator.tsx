import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './routes/main.navigator';
import {Colors} from "core/theme/colors.theme";

const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.lightBar,
    },
};

export const AppNavigator = (): React.ReactElement => {
    return (
        <NavigationContainer theme={navigatorTheme}>
            <MainNavigator/>
        </NavigationContainer>
    )
};