import * as Types from '../constants/ActionTypes';
import {SETTING} from '../constants/InitialState';
import Locale from '../utils/Locale';

const INITIAL_STATE= {
    settings: {
        ...SETTING.settings,
        locale: Locale.currentLocale()
    },
};
 
export function settingState ( state = INITIAL_STATE , action) {
    switch (action.type){
        case 'persist/REHYDRATE':
        //Restore login info from redux-persist
        return {
            ...state,
            ...action.payload.settingState
        };
        case Types.SETTING.SETTING_DATA:
            return {...state, settings: {...state.settings, ...action.settings}};
        case Types.SETTING.SET_COLOR:
            console.log('SET_COLOR', action)
            return {...state, colorTheme: action.data};
            // return { ...state, settings: { ...state.settings, ...action.settings } };
        default:
            return state;
    }
}