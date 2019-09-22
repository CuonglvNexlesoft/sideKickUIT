import * as Types from '../constants/ActionTypes';
import {APP} from '../constants/InitialState';
import Locale from '../utils/Locale';

const INITIAL_STATE= {
    ...APP,
    settings: {
        locale: Locale.currentLocale()
    }
};

export function appState ( state = INITIAL_STATE , action) {
    switch (action.type){
        case Types.APP.SETTING_DATA:
            return {...state, settings: {...state.settings, ...action.settings}};
        case Types.APP.HIDE_LOADING:
            return {...state, loading: false};
        case Types.APP.SHOW_LOADING:
            return {...state, loading: true};
        case Types.APP.SET_HEADER_TEXT:
            return {...state, headerText: action.headerText}
        default:
            return state;
    }
}