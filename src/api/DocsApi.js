import BaseApi from './BaseApi';

class DocsApi extends BaseApi {

  creatDoc(params){
        return super.execute(this.Methods.POST, this.Urls.createDoc, null, params);
  }

}

export default new DocsApi();