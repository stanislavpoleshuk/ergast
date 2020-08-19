import {
    FETCH_DRIVERS_ERROR,
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVERS_SUCCESS,
    DriversState,
    DriversTypes,
    FETCH_DRIVER_DETAIL_ERROR,
    FETCH_DRIVER_DETAIL_SUCCESS,
    FETCH_DRIVER_DETAIL_REQUEST,
    FETCH_DRIVER_RACES_ERROR, FETCH_DRIVER_RACES_SUCCESS, FETCH_DRIVER_RACES_REQUEST,
} from './types';
import {PaginationModel} from "models/pagination.model";

const initial: DriversState = {
    isLoading: false,
    data: [],
    pagination: new PaginationModel(),
    detail: undefined,
    races: []
};

export function DriversReducer(
    state = initial,
    action: DriversTypes,
): DriversState {
    switch (action.type) {

        case FETCH_DRIVERS_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case FETCH_DRIVERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.drivers,
                pagination: new PaginationModel(action.page, action.total)
            };
        }

        case FETCH_DRIVERS_ERROR: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case FETCH_DRIVER_DETAIL_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case FETCH_DRIVER_DETAIL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                detail: action.driver
            };
        }

        case FETCH_DRIVER_DETAIL_ERROR: {
            return {
                ...state,
                isLoading: false,
            };
        }

        case FETCH_DRIVER_RACES_REQUEST: {
            return {
                ...state,
                isLoading: true,
                races: []
            };
        }

        case FETCH_DRIVER_RACES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                races: action.races
            };
        }

        case FETCH_DRIVER_RACES_ERROR: {
            return {
                ...state,
                isLoading: false,
            };
        }

        default:
            return state;
    }
}
