import { SETTING } from '../constants/ActionTypes';
import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';

export function setSettingsData(settings) {
    return (dispatch) => dispatch({ type: SETTING.SETTING_DATA, settings });
}

export function setSettings(settings) {
    return dispatch => {
        return new Promise.resolve(
            dispatch(setSettingsData(settings))
        )
    }
}

// export function getSettings() {
//     return dispatch => {
//         return new Promise((resolve, reject) => {
//             CommonUtils.getItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_SETTINGS).then(result => {
//                 CommonUtils.log('ACTION GET SETTINGS', result);
//                 dispatch(setSettingsData(result));
//                 CommonUtils.log('GET SETTINGS', result);
//                 resolve(result);
//             }, error => {
//                 console.log('ACTION GET SETTINGS ERROR', error);
//                 reject(error);
//             });
//         });
//     }
// }