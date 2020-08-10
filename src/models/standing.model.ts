import {DriverModel} from "models/driver.model";


export interface ConstructorModel {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
}

export interface DriverStandingModel {
    position: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverModel;
    Constructors: ConstructorModel[];
}

export interface StandingsListModel {
    season: string;
    round: string;
    DriverStandings: DriverStandingModel[];
}

export interface StandingsTableModel {
    season: string;
    StandingsLists: StandingsListModel[];
}

export interface StandingsResponse {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: number;
    StandingsTable: StandingsTableModel;
}