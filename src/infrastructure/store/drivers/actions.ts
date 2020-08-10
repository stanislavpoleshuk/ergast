import {
    FETCH_DRIVER_DETAIL_ERROR,
    FETCH_DRIVER_DETAIL_REQUEST,
    FETCH_DRIVER_DETAIL_SUCCESS,
    FETCH_DRIVER_RACES_ERROR,
    FETCH_DRIVER_RACES_REQUEST,
    FETCH_DRIVER_RACES_SUCCESS,
    FETCH_DRIVERS_ERROR,
    FETCH_DRIVERS_REQUEST,
    FETCH_DRIVERS_SUCCESS,
} from './types';
import {DriverModel} from "models/driver.model";
import {RaceModel} from "models/race.model";

export class DriversActions {
    static fetchDriversRequest = function () {
        return {
            type: FETCH_DRIVERS_REQUEST,
        };
    };

    static fetchDriversSuccess = function (drivers: Array<DriverModel>, total: number, page: number) {
        return {
            type: FETCH_DRIVERS_SUCCESS,
            drivers,
            total,
            page
        };
    };

    static fetchDriversError = function () {
        return {
            type: FETCH_DRIVERS_ERROR,
        };
    };

    static fetchDriverByIdRequest = function () {
        return {
            type: FETCH_DRIVER_DETAIL_REQUEST,
        };
    };

    static fetchDriverByIdSuccess = function (driver: DriverModel) {
        return {
            type: FETCH_DRIVER_DETAIL_SUCCESS,
            driver
        };
    };

    static fetchDriverByIdError = function () {
        return {
            type: FETCH_DRIVER_DETAIL_ERROR,
        };
    };

    static fetchDriverRacesRequest = function () {
        return {
            type: FETCH_DRIVER_RACES_REQUEST,
        };
    };

    static fetchDriverRacesSuccess = function (races: Array<RaceModel>) {
        return {
            type: FETCH_DRIVER_RACES_SUCCESS,
            races
        };
    };

    static fetchDriverRacesIdError = function () {
        return {
            type: FETCH_DRIVER_RACES_ERROR,
        };
    };
}
