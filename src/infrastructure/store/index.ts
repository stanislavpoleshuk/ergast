import AsyncStorage from "@react-native-community/async-storage";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer} from 'redux-persist';
import {DriversReducer} from "./drivers/reducers";
import {StandingsReducer} from "./standings/reducers";

const rootReducer = combineReducers({
    standings: StandingsReducer,
    drivers: DriversReducer
});

export type IAppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleWares = [
        thunkMiddleware
    ];
    const middleWareEnhancer = applyMiddleware(...middleWares);

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: [
        ],
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    return createStore(
        persistedReducer,
        undefined,
        composeWithDevTools(middleWareEnhancer),
    );
}
