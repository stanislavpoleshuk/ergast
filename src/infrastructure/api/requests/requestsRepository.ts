import {DriversRequest} from "./drivers/drivers.request";
import {StandingsRequest} from "./standings/standings.request";

export class RequestsRepository {
    drivers = new DriversRequest();
    standings = new StandingsRequest();

    constructor() {
    }
}