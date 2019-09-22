import * as Types from '../constants/ActionTypes';
import {PRODUCT} from '../constants/InitialState';
import Locale from '../utils/Locale';

export function productState ( state = PRODUCT , action) {
    switch (action.type){
        case Types.PRODUCT.PRODUCT_DATA:
            return { ...state, products: action.products };
        default:
            return state;
    }
}