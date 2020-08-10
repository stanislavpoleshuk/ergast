import {DriverModel} from "models/driver.model";
import {PaginationModel} from "models/pagination.model";
import {RaceModel} from "models/race.model";

export type DriversState = {
    isLoading: boolean;
    data: Array<DriverModel>;
    pagination: PaginationModel;
    detail: DriverModel;
    races: Array<RaceModel>;
}

export const FETCH_DRIVERS_REQUEST = 'DRIVERS/FETCH_DRIVERS_REQUEST';

interface fetchDriversRequest {
    type: typeof FETCH_DRIVERS_REQUEST;
}

export const FETCH_DRIVERS_SUCCESS = 'DRIVERS/FETCH_DRIVERS_SUCCESS';

interface fetchDriversSuccess {
    type: typeof FETCH_DRIVERS_SUCCESS;
    drivers: Array<DriverModel>;
    total: number;
    page: number;
}

export const FETCH_DRIVERS_ERROR = 'DRIVERS/FETCH_DRIVERS_ERROR';

interface fetchDriversError {
    type: typeof FETCH_DRIVERS_ERROR;
}

export const FETCH_DRIVER_DETAIL_REQUEST = 'DRIVERS/FETCH_DRIVER_DETAIL_REQUEST';

interface fetchDriverDetailRequest {
    type: typeof FETCH_DRIVER_DETAIL_REQUEST;
}

export const FETCH_DRIVER_DETAIL_SUCCESS = 'DRIVERS/FETCH_DRIVER_DETAIL_SUCCESS';

interface fetchDriverDetailSuccess {
    type: typeof FETCH_DRIVER_DETAIL_SUCCESS;
    driver: DriverModel;
}

export const FETCH_DRIVER_DETAIL_ERROR = 'DRIVERS/FETCH_DRIVER_DETAIL_ERROR';

interface fetchDriverDetailError {
    type: typeof FETCH_DRIVER_DETAIL_ERROR;
}

export const FETCH_DRIVER_RACES_REQUEST = 'DRIVERS/FETCH_DRIVER_RACES_REQUEST';

interface fetchDriverRacesRequest {
    type: typeof FETCH_DRIVER_RACES_REQUEST;
}

export const FETCH_DRIVER_RACES_SUCCESS = 'DRIVERS/FETCH_DRIVER_RACES_SUCCESS';

interface fetchDriverRacesSuccess {
    type: typeof FETCH_DRIVER_RACES_SUCCESS;
    races: Array<RaceModel>;
}

export const FETCH_DRIVER_RACES_ERROR = 'DRIVERS/FETCH_DRIVER_RACES_ERROR';

interface fetchDriverRacesError {
    type: typeof FETCH_DRIVER_RACES_ERROR;
}

export type DriversTypes = fetchDriversRequest | fetchDriversSuccess | fetchDriversError
    | fetchDriverDetailRequest | fetchDriverDetailSuccess | fetchDriverDetailError
    | fetchDriverRacesRequest | fetchDriverRacesSuccess | fetchDriverRacesError;
