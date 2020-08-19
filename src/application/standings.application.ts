import {PagePaginationModel} from "models/pagination.model";
import {Dispatch} from "redux";
import {IAppState} from "infrastructure/store";
import {apiRepository} from "infrastructure/api/client/apiRequest";
import {StandingsActions} from "infrastructure/store/standings/actions";

export const fetchStandings = (pagination?: PagePaginationModel): any => async (dispatch: Dispatch, getState: () => IAppState) => {
    try {
        dispatch(StandingsActions.fetchStandingsRequest());
        const params = pagination ? pagination
            : getState().drivers.pagination.current;
        const response = await apiRepository.standings.get(2020, params);
        const {StandingsLists} = response.StandingsTable;
        dispatch(StandingsActions.fetchStandingsSuccess(StandingsLists[0]?.DriverStandings, response.total, params.page));
    } catch (e) {
        dispatch(StandingsActions.fetchStandingsError());
    }
};