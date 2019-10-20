import { createStore, applyMiddleware, compose} from 'redux';
import combineReducer from '../reducers/IndexReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { persistStore } from "redux-persist";
import { AsyncStorage } from "react-native";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userState','settingState'],
};
//const middleware = [thunk];
// const loggerMiddleware = createLogger()
// if (__DEV__) {
//     middleware.push(loggerMiddleware);
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function getStore() {
    const store = createStore(
        combineReducer,
        //composeEnhancer(applyMiddleware(...middleware))
    );
    // begin periodically persisting the store
    persistStore(store, persistConfig);
    return store;
}