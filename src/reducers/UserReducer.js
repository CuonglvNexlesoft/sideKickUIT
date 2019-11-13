import * as Types from '../constants/ActionTypes';
import {USER} from '../constants/InitialState';

export function userState ( state = USER , action) {
    switch (action.type){
        case 'persist/REHYDRATE':
        //Restore login info from redux-persist
        return {
            ...state,
            rehydrate: true
        };
        case Types.USER.USER_DATA:
            return state;
        case Types.USER.USER_DATA:
            return {...state, user: action.user};
        case Types.USER.DISTRIBUTOR_DATA:
            return {...state, distributor: action.distributor};
        default:
            return state;
    }
}