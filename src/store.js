import { createStore, combineReducers } from 'redux';
import {normalizedTodos, notNormalizedTodos, incrementReducer} from './reducer'

export default createStore(combineReducers({
    normalizedTodos,
    notNormalizedTodos,
    incrementReducer,
}));