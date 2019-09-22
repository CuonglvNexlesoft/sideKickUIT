import Methods from './Methods'
import Response from './../models/Response';
import GlobalKeys from '../constants/GlobalKeys';
import * as CommonUtils from '../utils/CommonUtils';

class RestClient {
    constructor(method, url) {
        this.method = method;
        this.url = url;
    }
    execute(headers, body=undefined, params=undefined) {
        return new Promise((resolve, reject) => {
            let response = new Response({});
            let _headers = { // Default headers
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            if (global[GlobalKeys.AUTH_TOKEN] != undefined && global[GlobalKeys.AUTH_TOKEN] != null) {
                CommonUtils.log('============== ADD AUTH TOKEN HEADER ==============', global[GlobalKeys.AUTH_TOKEN]);
                _headers['Authorization'] = 'Bearer ' + global[GlobalKeys.AUTH_TOKEN];
            }
            if (headers != undefined && headers != null) {
                _headers = { ..._headers, ...headers }
            }
            var _options = {
                method: this.method,
                headers: _headers,
                timeout: 60,
            };
            if ((this.method == Methods.POST || this.method == Methods.PUT) && !CommonUtils.isObjectUndefinedOrNull(body)) {
                _options.body = JSON.stringify(body);
            }
            if (!CommonUtils.isObjectUndefinedOrNull(params)) {
                let query = '';
                Object.keys(params).map((key, index) => {
                    const bullet = index == 0 ? '?' : '&';
                    query = query + bullet + key + '=' + encodeURIComponent(params[key]);
                });
                this.url = this.url + query;
            }
            CommonUtils.log('==== API REQUEST ====', this.url, _options);

            fetch(this.url, _options)
                .then((resp) => {
                    response.status = resp.status;
                    var contentType = resp.headers.get("content-type");
                    if (contentType && contentType.includes("application/json")) {
                        return resp.json();
                    } else {
                        return resp.text();
                    }
                })
                .then((results) => {
                    if (response.status == 200 || response.status == 201 || response.status == 202 || results.success) {
                        response.data = results;
                        resolve(response);
                    } else {
                        response.error = true;
                        response.message = results.message || results.error || 'Unhandle error';
                        CommonUtils.log("REST CLIENT ERROR", results)
                        reject(response);
                    }

                })
                .catch((error) => {
                    CommonUtils.log("REST CLIENT ERROR", error)
                    response.error = true;
                    response.message = error.message || error.error || 'Unhandle error';
                    reject(response);
                });
        });

    }

}

module.exports = RestClient;