import BaseService from './BaseService';
import DocsApi from '../api/DocsApi';
// import Product from '../models/Product';

class DocsService extends BaseService {
    constructor(){
        super()
    }

    creatDoc(params){
        return DocsApi.creatDoc(params).then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }
    

}
export default new DocsService();