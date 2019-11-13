import {combineReducers} from 'redux';
import * as AppReducer from './AppReducer';
import * as UserReducer from './UserReducer';
import * as ProductReducer from './ProductReducer';
import * as SettingReducer from './SettingReducer';

const allReducers = Object.assign({},
    AppReducer,
    UserReducer,
    // ProductReducer,
    SettingReducer,
);

const rootReducer = combineReducers(allReducers);

export default rootReducer