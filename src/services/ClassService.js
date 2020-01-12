import BaseService from './BaseService';
import ClassApi from '../api/ClassApi';
// import Product from '../models/Product';

class ClassService extends BaseService {
    constructor(){
        super()
    }

    getClassList(params){
        return ClassApi.getClassList().then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }

    creatClass(params){
        return ClassApi.creatClass(params).then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }
    
    getClassDetail(id){
        return ClassApi.getClassDetail(id).then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }

}
export default new ClassService();