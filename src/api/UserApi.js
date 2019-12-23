/* eslint-disable */
import BaseApi from './BaseApi';

class UserApi extends BaseApi {

  login(params){
        return super.execute(this.Methods.POST, this.Urls.logginUser, null, params);
    }
    logout(params){
      return super.execute(this.Methods.POST, this.Urls.logoutUser, null, params);
  }

}

export default new UserApi();
