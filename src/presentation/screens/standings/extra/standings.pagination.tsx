import {StyleSheet, View} from "react-native";
import React from "react";
import {IAppState} from "infrastructure/store";
import {useSelector, useDispatch} from "react-redux";
import {PagePaginationModel} from "models/pagination.model";
import {ButtonPagination} from "components/common/pagination/button-pagination.component";
import {fetchStandings} from "application/standings.application";

type Props = {}

export const StandingsPagination: React.FC<Props> =
    ({}) => {
        const pagination = useSelector((state: IAppState) => state.standings.pagination)
        const dispatch = useDispatch();

        const fetch = (params: PagePaginationModel) => {
            dispatch(fetchStandings(params));
        }

        const onPressPrev = () => {
            fetch(pagination.prevParams);
        }

        const onPressNext = () => {
            fetch(pagination.nextParams);
        }

        return (
            <View style={styles.content}>
                <ButtonPagination
                    label={'Назад'}
                    onPress={onPressPrev}
                    disabled={!pagination.prevEnabled}
                />
                <ButtonPagination
                    label={'Вперед'}
                    onPress={onPressNext}
                    disabled={!pagination.nextEnabled}
                />
            </View>
        )
    }

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {}
})

export class RacePagination {
}