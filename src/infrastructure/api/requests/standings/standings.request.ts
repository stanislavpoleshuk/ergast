import {BaseRepository} from "../baseRepository";
import {AxiosResponse} from "axios";
import {PagePaginationModel} from "models/pagination.model";
import {DriverResponseModel, DriverTableModel} from "models/driver.model";
import {StandingsResponse} from "models/standing.model";

export class StandingsRequest extends BaseRepository {
    constructor() {
        super();
    }

    get(session: number, pagination: PagePaginationModel): Promise<StandingsResponse> {
        let url = this.baseUrl + `/${session}/driverStandings.json`;
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
}