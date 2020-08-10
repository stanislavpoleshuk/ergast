import {Dispatch} from "redux";
import {IAppState} from "infrastructure/store";
import {PagePaginationModel} from "models/pagination.model";
import {DriversActions} from "infrastructure/store/drivers/actions";
import {apiRepository} from "infrastructure/api/client/apiRequest";

export const fetchDrivers = (pagination?: PagePaginationModel): any => async (dispatch: Dispatch, getState: () => IAppState) => {
    try {
        dispatch(DriversActions.fetchDriversRequest());
        const params = pagination ? pagination
            : getState().drivers.pagination.current;
        const response = await apiRepository.drivers.get(params);
        const { Drivers } = response.DriverTable;
        dispatch(DriversActions.fetchDriversSuccess(Drivers, response.total, params.page));
    } catch (e) {
        dispatch(DriversActions.fetchDriversError());
    }
};


export const fetchDriverById = (driverId: string): any => async (dispatch: Dispatch) => {
    try {
        dispatch(DriversActions.fetchDriverByIdRequest());
        const driver = await apiRepository.drivers.getById(driverId);
        dispatch(DriversActions.fetchDriverByIdSuccess(driver));
    } catch (e) {
        dispatch(DriversActions.fetchDriverByIdError());
    }
};


export const fetchDriverRaces = (driverId: string): any => async (dispatch: Dispatch) => {
    try {
        dispatch(DriversActions.fetchDriverRacesRequest());
        const driver = await apiRepository.drivers.races(2020, driverId);
        dispatch(DriversActions.fetchDriverRacesSuccess(driver));
    } catch (e) {
        dispatch(DriversActions.fetchDriverRacesIdError());
    }
};
