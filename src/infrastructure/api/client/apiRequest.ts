import {RequestsRepository} from "../requests/requestsRepository";


class ApiRequestRepository extends RequestsRepository {
    constructor() {
        super();
    }
}

export const apiRepository = new ApiRequestRepository();