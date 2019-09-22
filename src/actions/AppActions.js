import { APP } from '../constants/ActionTypes';
import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';

export function showLoading() {
    return (dispatch) => { dispatch({ type: APP.SHOW_LOADING }); }
}

export function hideLoading() {
    return (dispatch) => { dispatch({ type: APP.HIDE_LOADING }); }
}

export function setHeaderText(text) {
    return (dispatch) => { dispatch({ type: APP.SET_HEADER_TEXT, headerText: text });}
}

export function setSettingData(settings) {
    return (dispatch) => { dispatch({ type: APP.SETTING_DATA, settings })}
}

export function setSettings(settings) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.setItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_SETTINGS, settings).then(result => {
                CommonUtils.log('SET SETTINGS', settings);
                dispatch(setSettingData(settings));
                resolve(settings);
            }, error => {
                console.log('SET SETTINGS ERROR', error);
                reject(error);
            });
        });
    }
}

export function getSettings() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.getItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_SETTINGS).then(result => {
                CommonUtils.log('GET SETTINGS', result);
                dispatch(setSettingData(result || {}));
                resolve(result);
            }, error => {
                console.log('GET SETTINGS ERROR', error);
                reject(error);
            });
        });
    }
}