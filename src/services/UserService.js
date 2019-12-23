import BaseService from './BaseService';
import UserApi from '../api/UserApi';
// import Product from '../models/Product';

class UserService extends BaseService {
    constructor(){
        super()
    }

    login(params){
        return UserApi.login(params).then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }
    logout(params){
        return UserApi.logout(params).then(result => {
            // console.log('asdasdas', result)
            return result;
        }, this.handleError)
    }

}
export default new UserService();