import React from 'react';
import { Link, useLocation, useHistory } from 
'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsignGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () =>{
        signInUsignGoogle()
        .then(result =>{
            history.push(redirect_uri)

        })

    }
    return (
        <div className="login-form">
            <div >
            <h1> Plasce Login</h1>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder="Your Emila" />
                <br />
                <input type="Password" name="password" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>new to ema-jon <Link to="/register">Create Account</Link></p>
            <div>----------or----------</div>
            <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
        </div>
    );
};

export default Login;