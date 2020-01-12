/* eslint-disable */
import BaseApi from './BaseApi';

class ClassApi extends BaseApi {

  getClassList(){
        return super.execute(this.Methods.GET, this.Urls.getClassList);
    }
   
  creatClass(params){
      return super.execute(this.Methods.POST, this.Urls.createClass, null, params);
  }

  getClassDetail(id){
    let _url = this.Urls.getClassDetail.replace("{lophocid}",id )
    return super.execute(this.Methods.GET, _url);
}
}

export default new ClassApi();