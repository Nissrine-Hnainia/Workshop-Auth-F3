import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = localStorage.getItem('token')
    if (token) {
    return <Route component={Component} />
    }
    return <Redirect to='/login' />
}

export default PrivateRoute
