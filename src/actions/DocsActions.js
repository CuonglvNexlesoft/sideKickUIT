import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';
import DocsService from '../services/DocsService'
import Class from '../models/Class';
import { CLASS } from '../constants/ActionTypes';

export function creatDoc(params){
    return dispatch => {
        return DocsService.creatDoc(params).then(res => {
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