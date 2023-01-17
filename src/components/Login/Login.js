import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { singInUsingGoogle, singInUsingGithub } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singInUsingGoogle}>Google Sing In</button>
            <br />
            <button onClick={singInUsingGithub}>Github Sing In</button>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;