import { combineReducers } from 'redux'
import { listReducer } from './listReducer'

export const reducers= combineReducers({
    list : listReducer
});