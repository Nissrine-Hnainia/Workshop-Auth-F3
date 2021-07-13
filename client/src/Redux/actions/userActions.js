//import axios
import axios from "axios"
//import action-types
import {
    REGISTER_USER, 
    LOGIN_USER, 
    LOAD_USER, 
    USER_FAIL,  
    AUTH_USER,
    LOGOUT_USER} from "../constants/actionTypes"


//register the user
export const registerUser = (newUser, history) => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('/api/users/register', newUser)
        dispatch({
            type: REGISTER_USER,
            payload: res.data //{msg, user, token}
        })
        history.push("/auth")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: USER_FAIL,
            payload: errors
        })
    }
}


//sign in the user
export const loginUser = (user, history) => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('/api/users/login', user)
        dispatch({
            type: LOGIN_USER,
            payload: res.data //{msg, user, token}
        })
        history.push('/auth')
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: USER_FAIL,
            payload: errors
        })
    }
}

//auth user
export const authedUser = () => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        const config = {
            headers:{
                "auth-token": localStorage.getItem('token')
            }
        }
        let res = await axios.get("/api/users/auth", config)
        dispatch({
            type: AUTH_USER,
            payload: res.data //{user}
        })
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: USER_FAIL,
            payload: errors
        })
    }
}


//logout user
export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}

