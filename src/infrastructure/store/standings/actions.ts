import {
    FETCH_STANDINGS_ERROR,
    FETCH_STANDINGS_REQUEST, FETCH_STANDINGS_SUCCESS,
} from './types';
import {DriverModel, DriverTableModel} from "models/driver.model";
import {DriverStandingModel, StandingsListModel} from "models/standing.model";

export class StandingsActions {
    static fetchStandingsRequest = function () {
        return {
            type: FETCH_STANDINGS_REQUEST,
        };
    };

    static fetchStandingsSuccess = function (standings: Array<DriverStandingModel>, total: number, page: number) {
        return {
            type: FETCH_STANDINGS_SUCCESS,
            standings,
            total,
            page
        };
    };

    static fetchStandingsError = function () {
        return {
            type: FETCH_STANDINGS_ERROR,
        };
    };
}
