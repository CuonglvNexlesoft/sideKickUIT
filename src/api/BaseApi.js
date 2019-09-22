import RestClient from './RestClient';
import Methods from './Methods';
import Urls from './Urls';

export default class BaseApi {
    constructor() {
        this.Urls = Urls;
        this.Methods = Methods;
    }

    execute(method, endpoint, headers = undefined, body = undefined, params = undefined,) {
        const url = Urls.baseUrl + '/' + endpoint
        const restClient = new RestClient(method, url);
        return restClient.execute(headers, body, params);
    }
}
