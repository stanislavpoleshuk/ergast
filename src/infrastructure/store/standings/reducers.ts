import {
    FETCH_STANDINGS_ERROR,
    FETCH_STANDINGS_REQUEST,
    FETCH_STANDINGS_SUCCESS,
    StandingsState,
    StandingsTypes,
} from './types';
import {PaginationModel} from "models/pagination.model";

const initial: StandingsState = {
    isLoading: false,
    data: [],
    pagination: new PaginationModel()
};

export function
StandingsReducer(
    state = initial,
    action: StandingsTypes,
): StandingsState {
    switch (action.type) {

        case FETCH_STANDINGS_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case FETCH_STANDINGS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.standings,
                pagination: new PaginationModel(action.page, action.total)
            };
        }

        case FETCH_STANDINGS_ERROR: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
}
