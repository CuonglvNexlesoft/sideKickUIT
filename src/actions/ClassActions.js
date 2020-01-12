import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';
import ClassService from '../services/ClassService'
import Class from '../models/Class';
import { CLASS } from '../constants/ActionTypes';
import Doc from '../models/Doc';

export function setClassData(arrClass) {
    return (dispatch) => { dispatch({ type: CLASS.SET_DATA_CLASS, arrClass }); }
}

export function setClassDetail(itemClass) {
    return (dispatch) => { dispatch({ type: CLASS.SET_DATA_CLASS_DETAIL, itemClass }); }
}

export function getClassList(params){
  return dispatch => {
      return ClassService.getClassList().then(res => {
          if (res.status === 200) {
              let mappingClass = Class.mappingObjects(res.data._dslophoc);
            //   console.log(mappingClass)
            dispatch(setClassData(mappingClass));
          } else {
              console.log("ERROR: login fail", res.data.msg);
          }
          return res;
      });
  };
}

export function creatClass(params){
    return dispatch => {
        return ClassService.creatClass(params).then(res => {
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

  export function getClassDetail(id){
    return dispatch => {
        return ClassService.getClassDetail(id).then(res => {
            if (res.status === 200) {
                let mappingUser = new Class(res.data._lopHoc);
                Doc.mappingObjects(res.data._dstailieu);
                mappingUser.listDocs = Doc.mappingObjects(res.data._dstailieu);
                // console.log(mappingUser)
                dispatch(setClassDetail(mappingUser));
            } else {
                console.log("ERROR: getClassDetail", res.data.msg);
            }
            return res;
        });
    };
  }