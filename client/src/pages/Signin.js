import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {loginUser} from "../Redux/actions/userActions"

const Signin = ({history}) => {
    const [user, setUser] = useState({})

    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value })
    }
    const errors = useSelector(state => state.userReducer.errors)
    const dispatch = useDispatch()
    return (
        <div className="wrapper">
        <Form className="register-page">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </Form.Group>
            {errors && errors.map(el => <p> {el.msg} </p>) }
            <Button onClick={() => dispatch(loginUser(user, history))} >
                Sign In
            </Button>
        </Form>
        </div>
    )
}

export default Signin
