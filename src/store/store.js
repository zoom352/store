import { combineReducers, createStore } from "redux";
import cardReducer from './card-redux'


let reducers = combineReducers({
    cardPage: cardReducer
})


let store = createStore(reducers)


window.store = store


export default store