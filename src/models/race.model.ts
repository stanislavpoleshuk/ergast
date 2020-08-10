import {ConstructorModel} from "models/standing.model";
import {DriverModel} from "models/driver.model";

export interface LocationModel {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

export interface CircuitModel {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

export interface TimeModel {
    millis: string;
    time: string;
}

export interface Time2Model {
    time: string;
}

export interface AverageSpeedModel {
    units: string;
    speed: string;
}

export interface FastestLapModel {
    rank: string;
    lap: string;
    Time: Time2Model;
    AverageSpeed: AverageSpeedModel;
}

export interface ResultModel {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverModel;
    Constructor: ConstructorModel;
    grid: string;
    laps: string;
    status: string;
    Time: TimeModel;
    FastestLap: FastestLapModel;
}

export interface RaceModel {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: CircuitModel;
    date: string;
    time: string;
    Results: ResultModel[];
}
