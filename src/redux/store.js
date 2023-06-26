import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import  rootReducer  from "./reducers/allReducers";

const enchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const store = createStore(rootReducer, enchancers(applyMiddleware(...middleware)))

export default store;