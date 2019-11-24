import {combineReducers} from 'redux';
import * as AppReducer from './AppReducer';
import * as UserReducer from './UserReducer';
import * as ClassReducer from './ClassReducer';
import * as TestReducer from './TestReducer';
import * as SettingReducer from './SettingReducer';

const allReducers = Object.assign({},
    AppReducer,
    UserReducer,
    ClassReducer,
    SettingReducer,
    TestReducer
);

const rootReducer = combineReducers(allReducers);

export default rootReducer