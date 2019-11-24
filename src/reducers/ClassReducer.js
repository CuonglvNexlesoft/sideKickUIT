import * as Types from '../constants/ActionTypes';
import {CLASS} from '../constants/InitialState';
import Locale from '../utils/Locale';

export function classState ( state = CLASS , action) {
    switch (action.type){
        case Types.PRODUCT.PRODUCT_DATA:
            return { ...state, products: action.products };
        default:
            return state;
    }
}