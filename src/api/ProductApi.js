/* eslint-disable */
import BaseApi from './BaseApi';

class ProductAPI extends BaseApi {

    fetchProducts(params){
        return super.execute(this.Methods.GET, this.Urls.products.getProducts, null, null, params);
    }

}

export default new ProductAPI();
