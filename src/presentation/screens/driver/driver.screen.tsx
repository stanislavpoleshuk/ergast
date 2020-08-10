import React, {useEffect} from "react";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "core/navigation/routes/home.navigator";
import {DriverContainer} from "screens/driver/driver.container";
import {DriverModel} from "models/driver.model";

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Driver'>;
type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Driver'>;

type Props = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
};

export const DriverScreen: React.FC<Props> =
    ({route, navigation}) => {
        const [driverId, setDriverId] = React.useState<string>(undefined);

        useEffect(() => {
            const {driverId} = route.params;
            setDriverId(driverId);
        }, [route])

        const toPilotResults = () => {
            navigation.navigate("Races", {
                driverId: driverId
            });
        }

        return (
            <DriverContainer
                driverId={driverId}
                toResults={toPilotResults}
            />
        )
    }