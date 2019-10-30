import { createStore, combineReducers } from 'redux';
import {normalizedTodos, notNormalizedTodos} from './reducer'

export default createStore(combineReducers({
    normalizedTodos,
    notNormalizedTodos
}));