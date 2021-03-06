import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {reducers} from './Reducer/index'

const state={}

export const store=createStore(
    reducers,
    state,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));