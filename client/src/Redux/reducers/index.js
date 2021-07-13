//import combineReducers
import {combineReducers} from "redux"

//import userReducer
import userReducer from "./userReducer"

//create rootReducer
const rootReducer = combineReducers({userReducer})

//export
export default rootReducer