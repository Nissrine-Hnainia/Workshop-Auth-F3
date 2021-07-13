import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from "../Redux/actions/userActions"

const Register = ({history}) => {
    const [newUser, setNewUser] = useState({})

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }
    const errors = useSelector(state => state.userReducer.errors)
    const dispatch = useDispatch()
    return (
        <div className="wrapper">
        <Form className="register-page">
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </Form.Group>
            {errors && errors.map(el => <p> {el.msg} </p>) } {/* el => {msg: "hhhh"} */}
            <Button onClick={() => dispatch(registerUser(newUser, history))} >
                Register
            </Button>
        </Form>
        </div>
    )
}

export default Register
