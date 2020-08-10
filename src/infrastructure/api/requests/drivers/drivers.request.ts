import {BaseRepository} from "../baseRepository";
import {AxiosResponse} from "axios";
import {PagePaginationModel} from "models/pagination.model";
import {DriverModel, DriverResponseModel, DriverTableModel} from "models/driver.model";
import {RaceModel} from "models/race.model";

export class DriversRequest extends BaseRepository {
    constructor() {
        super();
    }

    get(pagination: PagePaginationModel): Promise<DriverResponseModel> {
        let url = this.baseUrl + "/driver.json";
        let options = {
            ...this.getOptions(url),
            params: {
                ...pagination
            }
        };
        return this.instance.request(options).then((response: AxiosResponse) => {
            const {data} = response;
            return data.MRData;
        });
    }

    getById(driverId: string): Promise<DriverModel> {
        let url = this.baseUrl + `/drivers/${driverId}.json`;
        let options = {
            ...this.getOptions(url),
            params: {
                driverId
            }
        };
        return this.instance.request(options).then((response: AxiosResponse) => {
            const {data} = response;
            return data.MRData.DriverTable.Drivers?.[0];
        });
    }

    races(session: number, driverId: string): Promise<Array<RaceModel>> {
        let url = this.baseUrl + `/${session}/drivers/${driverId}/results.json`;
        console.log(url, 'url');
        let options = {
            ...this.getOptions(url),
        };
        return this.instance.request(options).then((response: AxiosResponse) => {
            const {Races} = response.data.MRData.RaceTable;
            console.log(Races, 'response')
            return Races;
        });
    }

}