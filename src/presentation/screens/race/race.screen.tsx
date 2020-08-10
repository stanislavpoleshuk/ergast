import React, {useEffect} from "react";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParamList} from "core/navigation/routes/home.navigator";
import {RaceContainer} from "screens/race/race.container";

type HomeScreenRouteProp = RouteProp<HomeStackParamList, 'Races'>;

type Props = {
    route: HomeScreenRouteProp;
};

export const RaceScreen: React.FC<Props> =
    ({route}) => {
        const [driverId, setDriverId] = React.useState<string>(undefined);

        useEffect(() => {
            const {driverId} = route.params;
            setDriverId(driverId);
        }, [route])

        return (
            <RaceContainer
                driverId={driverId}
            />
        )
    }