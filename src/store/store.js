import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { userReducers } from '../reducers/userReducers';
import { errorReducers } from '../reducers/errorReducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({

    user: userReducers,
    error: errorReducers,

});

export const store = createStore(  

    reducers,
    composeEnhancers( applyMiddleware( thunk ) )

);