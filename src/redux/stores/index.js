import { combineReducers, configureStore, createStore } from 'redux'
import { accountReducer, postReducer } from '../reducers';

export default{
    configureStore: initial => {
        const reducers = combineReducers({
            account: accountReducer,
            post: postReducer
        });

        const store = createStore( reducers, initial );

        return store;
    },

    currentStore: () => {
        return store;
    }
}