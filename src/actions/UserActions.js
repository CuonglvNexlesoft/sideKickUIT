import { USER } from '../constants/ActionTypes';
import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';

export function setUserData(user) {
    return (dispatch) => { dispatch({ type: USER.USER_DATA, user }); }
}

// export function setUser(user) {
//     return dispatch => {
//         return new Promise((resolve, reject) => {
//             CommonUtils.setItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_USER, user).then(result => {
//                 global[GlobalKeys.KEY_ASYNC_STORAGE_USER] = user;
//                 dispatch(setUserData(user));
//                 resolve(user)
//             }, error => {
//                 reject(error)
//             });
//         });
//     }
// }
export function setUser(user) {
    return dispatch => {
        return new Promise.resolve(
            dispatch(setUserData(user))
        )
    }
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

export function removeUser() {
    return (dispatch) => { dispatch(setUserData(null)); }
}