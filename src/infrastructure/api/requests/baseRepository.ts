import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';


export type MethodType= 'GET' | 'POST' | 'PUT' | 'DELETE';

export class BaseRepository {
    protected baseUrl: string;
    protected instance: AxiosInstance;

    constructor(instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = 'http://ergast.com/api/f1';
    }

    static get baseOptions() {
        return {
            headers: {
                "Accept": "application/json"
            }
        }
    }

    protected getOptions(url: string, method: MethodType = 'GET'): AxiosRequestConfig {
        let options = <AxiosRequestConfig>{
            ...BaseRepository.baseOptions,
            method,
            url
        };

        return options;
    }
}