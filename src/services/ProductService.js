import BaseService from './BaseService';
import ProductApi from '../api/ProductApi';
import Product from '../models/Product';

class ProductService extends BaseService {
    constructor(){
        super()
    }

    fetchProducts(params){
        return ProductApi.fetchProducts(params).then(result => {
            return result.map(data => new Product(data));
        }, this.handleError)
    }

}
export default new ProductService();