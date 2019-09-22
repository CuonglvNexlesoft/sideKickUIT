const React = require('react');
const ReactNative = require('react-native');
const {
    NetInfo, Dimensions,
    Platform,
} = ReactNative;
import ExtraDimensions from 'react-native-extra-dimensions-android';
import DeviceInfo from 'react-native-device-info';


import GlobalKeys from '../constants/GlobalKeys';
import Locale from '../utils/Locale';

export function getFileNameFromPath(path) {
    return path.split('\\').pop().split('/').pop();
}

export function isStringEmpty(text) {
    return text === undefined || text === null || text === '';
}

export function isObjectUndefinedOrNull(obj) {
    return obj == undefined || obj == null;
}

export function containSpecialCharacters(str) {
    return !/^[a-zA-Z0-9]*$/.test(str);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isEmailValid(email) {
    return validator.validate(email);
}

export function isNumber(value) {
    return /^\d+$/.test(value);
}

export function isTablet() {
    return DeviceInfo.isTablet();
}

export function isEmpty(obj) {
    return obj == null || obj == undefined || obj == ''
}

export function formatCurrency(number) {
    return Locale.toCurrency(number, {
        unit: Locale.t("currency"),
        format: Locale.t("currencyFormat"),
        separator: Locale.t("numberSeparator"),
        precision: 0
    });
}

export function removeSpecial(text) {
    let plus = false;
    if (text.indexOf('+') > -1) {
        plus = true;
    }
    if (text) {
        text = text.replace(/ /g, '')
        var lower = text.toLowerCase();
        var upper = text.toUpperCase();
        var result = "";
        for (var i = 0; i < lower.length; ++i) {
            if (isNumber(text[i]) || (lower[i] != upper[i]) || (lower[i].trim() === '')) {
                result += text[i];
            }
        }
        return plus ? '+' + result : result;
    }
    return '';
}

export function removeAllSpaces(text) {
    return text.replace(/\s/g, '')
}

export function capitalizeString(text) {
    String.prototype.capitalize = function (lower) {
        return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });
    };
    return text ? text.capitalize(true) : text;
}

export function getDemensionsDevice() {
    var { height, width } = Dimensions.get('window');
    if (Platform.OS == 'android') {
        height = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
        width = ExtraDimensions.get('REAL_WINDOW_WIDTH');
    }

    let demensions = {};
    demensions.height = height;
    demensions.width = width;
    return demensions;
}
export function getVersion() {
    return DeviceInfo.getVersion();
}
export function getBundleId() {
    return DeviceInfo.getBundleId();
}
export function getItemAsyncStorage(key) {
    return new Promise((resolve, reject) => {
        ReactNative.AsyncStorage.getItem(GlobalKeys.KEY_ASYNC_STORAGE + key).then((result) => {
            if (result === null) {
                // console.log("NOT KEY EXIST ASYNCSTROGAE BY ", key);
                resolve(null);
            } else {
                const json = JSON.parse(result);
                resolve(json);
            }
        }).catch(error => {
            console.log("GET ASYNCSTROGAE ERROR", error);
            console.warn(error);
            reject(error);
        });
    });
}
export function setItemAsyncStorage(key, value) {
    return new Promise((resolve, reject) => {
        const jsonStr = JSON.stringify(value);
        if (jsonStr) {
            ReactNative.AsyncStorage.setItem(GlobalKeys.KEY_ASYNC_STORAGE + key, jsonStr).then((error) => {
                if (error) {
                    console.log("SET ASYNCSTROGAE ERROR", error);
                    console.warn(error);
                    reject(error);
                } else {
                    resolve('OK')
                }
            });
        } else {
            reject('CANNOT PARSE VALUE JSON TO STRING');
        }

    });
}
export function removeItemAsyncStorage(key) {
    return new Promise((resolve, reject) => {
        ReactNative.AsyncStorage.removeItem(GlobalKeys.KEY_ASYNC_STORAGE + key).then(() => {
            resolve(true)
        }).catch(error => {
            console.log("REMOVE ASYNCSTROGAE ERROR", error);
            console.warn(error);
            reject(error);
        });
    });
}
export function checkLogin() {
    return new Promise((resolve, reject) => {
        ReactNative.AsyncStorage.getItem(GlobalKeys.KEY_ASYNC_STORAGE + GlobalKeys.KEY_ASYNC_STORAGE_USER).then((result) => {
            if (result === null) {
                resolve(false);
            } else {
                const user = JSON.parse(result);
                if (user.token) {
                    resolve(user);
                } else {
                    resolve(false);
                }
            }
        }).catch(error => {
            console.log("CHECK LOGIN ERROR", error);
            console.warn(error);
            reject(error);
        });
    });
}
export function clearUser() {
    return new Promise((resolve, reject) => {
        ReactNative.AsyncStorage.removeItem(GlobalKeys.KEY_ASYNC_STORAGE + GlobalKeys.KEY_ASYNC_STORAGE_USER).then(() => {
            ReactNative.AsyncStorage.removeItem(GlobalKeys.KEY_ASYNC_STORAGE + GlobalKeys.KEY_ASYNC_STORAGE_ACCOUNT).then(() => {
                resolve(true)
            }).catch(error => {
                console.log("CLEAR ACCOUNT ERROR", error);
                console.warn(error);
                resolve(false);
            });
        }).catch(error => {
            console.log("CLEAR USER ERROR", error);
            console.warn(error);
            resolve(false);
        });
    });
}
export function upperCaseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}



export function log(...arg) {
    if (__DEV__) {
        return console.log(...arg);
    }
}

export function overrideLog() {

    var console = (function (oldCons) {
        return {
            ...oldCons,
            log: function (...args) {
                if (__DEV__) {
                    return oldCons.log(...args);
                }
            },
            info: function (...arg) {
                return oldCons.info(...arg);
            },
            warn: function (...arg) {
                return oldCons.warn(...arg);
            },
            error: function (...arg) {
                return oldCons.error(...arg);
            }
        };
    }(window.console));

    window.console = console;

}