import React from 'react';
import {Button, Form} from "react-bootstrap"

const Signin = () => {
    return (
        <div className="wrapper">
        <Form className="register-page">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Button>
                Sign In
            </Button>
        </Form>
        </div>
    )
}

export default Signin
