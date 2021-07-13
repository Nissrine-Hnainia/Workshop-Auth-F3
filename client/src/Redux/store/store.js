//import creatStore
import {createStore, compose, applyMiddleware} from "redux"
//import thunk
import thunk from "redux-thunk"

//import rootReducer
import rootReducer from "../reducers"

//create composeEnhancer
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//store
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)) 
)

export default store 