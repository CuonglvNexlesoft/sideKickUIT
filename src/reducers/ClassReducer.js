import * as Types from '../constants/ActionTypes';
import { CLASS } from '../constants/InitialState';
import Locale from '../utils/Locale';

export function classState(state = CLASS, action) {
    switch (action.type) {
        case Types.CLASS.SET_DATA_CLASS:
            return { ...state, dataClass: action.arrClass };
        case Types.CLASS.SET_DATA_CLASS_DETAIL:
            return { ...state, selectedClass: action.itemClass };

        default:
            return state;
    }
}