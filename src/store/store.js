import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { userReducers } from '../reducers/userReducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({

    user: userReducers,

});

export const store = createStore(  

    reducers,
    composeEnhancers( applyMiddleware( thunk ) )

);