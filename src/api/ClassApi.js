/* eslint-disable */
import BaseApi from './BaseApi';

class ClassApi extends BaseApi {

  getClassList(){
        return super.execute(this.Methods.GET, this.Urls.getClassList);
    }
   

}

export default new ClassApi();