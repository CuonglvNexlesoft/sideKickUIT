import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';
import ClassService from '../services/ClassService'

export function getClassList(params){
  return dispatch => {
      return ClassService.getClassList().then(res => {
          if (res.status === 200) {
              // let mappingUser = new User(res.data.user);
              console.log(res)
              // dispatch(setUserData(mappingUser));
          } else {
              console.log("ERROR: login fail", res.data.msg);
          }
          return res;
      });
  };
}