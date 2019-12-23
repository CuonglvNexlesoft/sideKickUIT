/* eslint-disable */
import BaseApi from './BaseApi';

class ProductAPI extends BaseApi {

    login(params){
        return super.execute(this.Methods.GET, this.Urls.logginUser, params);
    }

}

export default new ProductAPI();
