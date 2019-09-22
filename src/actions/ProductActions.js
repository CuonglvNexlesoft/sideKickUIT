import { PRODUCT } from '../constants/ActionTypes';
import * as CommonUtils from '../utils/CommonUtils';
import GlobalKeys from '../constants/GlobalKeys';
import ProductService from '../services/ProductService';
import { showLoading, hideLoading } from './AppActions';
import {findIndex} from 'lodash';

export function setProductData(products) {
    return dispatch => dispatch({ type: PRODUCT.PRODUCT_DATA, products })
}

export function setProducts(products) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.setItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT, products).then(result => {
                // global[GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT] = products;
                dispatch(setProductData(products));
                resolve(products);
            }, error => {
                console.log('SET PRODUCTS ACTION ERROR', error);
                reject(error);
            });
        });
    }
}

export function getProducts() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.getItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT).then(result => {
                // global[GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT] = result;
                dispatch(setProductData(result));
                resolve(result);
            }, error => {
                console.log('GET PRODUCTS ACTION ERROR', error);
                reject(error);
            });
        });
    }
}

export function updateProduct(product) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.getItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT).then(result => {
                const found = findIndex((result || []), p => p.id == product.id);
                if (found != -1) {
                    result[found] = product;
                }
                dispatch(setProducts(result));
                resolve(result);
            }, error => {
                console.log('UPDATE PRODUCT ACTION ERROR', error);
                reject(error);
            });
        });
    }
}

export function removeProducts() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            CommonUtils.removeItemAsyncStorage(GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT).then(result => {
                // global[GlobalKeys.KEY_ASYNC_STORAGE_PRODUCT] = [];
                dispatch(setProductData([]));
                resolve(result)
            }, error => {
                reject(error)
            });
        });
    }
}

export function fetchProducts(pageNumber, pageSize) {
    return dispatch => {
        dispatch(showLoading())
        return ProductService.fetchProducts({ pageNumber, pageSize }).then(products => {
            dispatch(setProducts(products));
            dispatch(hideLoading())
            return products;
        }, error => {
            console.log("ACTION FETCH PRODUCTS ERROR", error);
            throw error;
        })
    }
}
