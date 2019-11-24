import * as Types from '../constants/ActionTypes';
import {TEST} from '../constants/InitialState';
import Locale from '../utils/Locale';

export function testState ( state = TEST , action) {
    switch (action.type){
        // case Types.PRODUCT.PRODUCT_DATA:
        //     return { ...state, products: action.products };
        default:
            return state;
    }
}