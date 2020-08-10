import {PaginationModel} from "models/pagination.model";
import {DriverStandingModel, StandingsListModel} from "models/standing.model";

export type StandingsState = {
    isLoading: boolean;
    data: Array<DriverStandingModel>;
    pagination: PaginationModel;
}

export const FETCH_STANDINGS_REQUEST = 'STANDINGS/FETCH_STANDINGS_REQUEST';

interface fetchStandingsRequest {
    type: typeof FETCH_STANDINGS_REQUEST;
}

export const FETCH_STANDINGS_SUCCESS = 'STANDINGS/FETCH_STANDINGS_SUCCESS';

interface fetchStandingsSuccess {
    type: typeof FETCH_STANDINGS_SUCCESS;
    standings: Array<DriverStandingModel>;
    total: number;
    page: number;
}

export const FETCH_STANDINGS_ERROR = 'STANDINGS/FETCH_STANDINGS_ERROR';

interface fetchStandingsError {
    type: typeof FETCH_STANDINGS_ERROR;
}

export type StandingsTypes = fetchStandingsRequest | fetchStandingsSuccess | fetchStandingsError;
