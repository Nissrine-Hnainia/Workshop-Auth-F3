import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../Redux/actions/userActions';

const Dashbord = () => {
    const user = useSelector(state => state.userReducer.user) //mapStateToProps
    const dispatch = useDispatch()
    return (
        <div className="dashboard">
            <h1>This is the personal profile</h1>
            <h3>First name: {user.firstName} </h3>
            <h3>Last name: {user.lastName} </h3>
            <h3>Email: {user.email} </h3>
            <Button style={{width:"120px", margin:"5% 48%"}}>
                <Link to="/login"
                onClick={() => dispatch(logout())}
                style={{color:"white"}}
                >
                log out
                </Link>
            </Button>
        </div>
    )
}

export default Dashbord
