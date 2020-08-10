import React from "react";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "core/navigation/routes/home.navigator";
import {StandingsContainer} from "screens/standings/standings.container";
import {DriverModel} from "models/driver.model";

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

export const StandingsScreen: React.FC<Props> =
    ({navigation}) => {

        const toPilotDetail = (driver: DriverModel) => {
            navigation.navigate("Driver", {
                driverId: driver.driverId
            });
        }

        return (
            <StandingsContainer
                toPilotDetail={toPilotDetail}
            />
        )
    }