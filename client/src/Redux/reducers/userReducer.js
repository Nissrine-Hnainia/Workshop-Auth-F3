//1-import actions-types
import {LOAD_USER, REGISTER_USER, LOGIN_USER, USER_FAIL, AUTH_USER, LOGOUT_USER} from "../constants/actionTypes"

//2-initial state
const initialState = {
    user: {},
    errors: [],
    loadUser: false,
    isAuth: false
}


//3-create the pure function and export it
const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, loadUser: true}
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem("token", payload.token)
            return {...state, loadUser: false, isAuth: true, user: payload.user}
        case AUTH_USER: 
            return {...state, loadUser: false, isAuth: true, user: payload.user}
        case USER_FAIL:
            return {...state, loadUser: false, isAuth: false, errors: payload}
        case LOGOUT_USER:
            localStorage.removeItem('token') 
            return {...state, user: {}, errors: [], loadUser: false, isAuth: false}
        default:
            return state;
    }
}


export default userReducer



