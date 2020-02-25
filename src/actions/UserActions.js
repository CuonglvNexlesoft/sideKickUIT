import { USER } from '../constants/ActionTypes';
import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';
import UserService from "../services/UserService";
import User from '../models/User'


export function setUserData(user) {
    return (dispatch) => { dispatch({ type: USER.USER_DATA, user }); }
}

export function setUser(user) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.setItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_USER, user).then(result => {
                global[GlobalKeys.KEY_ASYNC_STORAGE_USER] = user;
                dispatch(setUserData(user));
                resolve(user)
            }, error => {
                reject(error)
            });
        });
    }
}
export function getMainPhotosetUser(user) {
    return dispatch => {
        return new Promise.resolve(
            dispatch(setUserData(user))
        )
    }
}

export function login(params){
    return dispatch => {
        return UserService.login(params).then(res => {
            // console.log('11111',res)
            if (res.status === 200) {
                let mappingUser = new User(res.data.user);
                console.log(mappingUser)
                dispatch(setUserData(mappingUser));
            } else {
                console.log("ERROR: login fail", res.data.msg);
            }
            return res;
        });
    };
}
export function signUp(params){
    return dispatch => {
        return UserService.signUp(params).then(res => {
            // console.log('signUp',res)
            // if (res.status === 200) {
            //     let mappingUser = new User(res.data.user);
            //     console.log(mappingUser)
            //     dispatch(setUserData(mappingUser));
            // } else {
            //     console.log("ERROR: login fail", res.data.msg);
            // }
            return res;
        });
    };
}

export function updateUserInfo(params){
    return dispatch => {
        return UserService.updateUserInfo(params).then(res => {
            // console.log('updateUserInfo',res)
            if (res.status === 200) {
                // let mappingUser = new User(res.data.user);
                // console.log(mappingUser)
                // dispatch(setUserData(mappingUser));
            } else {
                console.log("ERROR: login fail", res.data.msg);
            }
            return res;
        });
    };
}

export function logout(params){
    return dispatch => {
        return UserService.logout({
            "ID": "1"
        });
    };
}
// export function getUser() {
//     return dispatch => {
//         return new Promise((resolve, reject) => {
//             CommonUtils.getItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_USER).then(result => {
//                 global[GlobalKeys.KEY_ASYNC_STORAGE_USER] = result;
//                 dispatch(setUserData(result));
//                 resolve(result)
//             }, error => {
//                 reject(error)
//             });
//         });
//     }
// }
export function getMainPhoto(user) {
    // return dispatch => {
    //     return new Promise.resolve(
    //         dispatch(setUserData(user))
    //     )
    // }
    return (dispatch) => { dispatch({ type: USER.USER_AVATAR }); }
}

export function removeUser() {
    return (dispatch) => { dispatch(setUserData(null)); }
}