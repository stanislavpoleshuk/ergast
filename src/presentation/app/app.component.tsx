import {StatusBar} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AppNavigator} from "core/navigation/app.navigator";
import React from "react";
import {StoreProvider} from "core/provider/store.provider";

const App = (): React.ReactElement => {
    return (
        <StoreProvider>
            <SafeAreaProvider>
                <StatusBar/>
                <AppNavigator/>
            </SafeAreaProvider>
        </StoreProvider>
    );
};

export default (props): React.ReactElement => {
    return (
        <>
            <App {...props}/>
        </>
    );

}