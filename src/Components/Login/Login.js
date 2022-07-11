import React from 'react';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { singInWithGoogle, singInWithGithub } = useAuth()
    return (
        <div>
            <h1>Please Login</h1>
            {/* <input type="text" /> */}
            <br />
            <button onClick={singInWithGoogle}>Sign in with Google</button>
            <button onClick={singInWithGithub}>Sign in with Github</button>
            <br />
            <Link to="/register">New User?</Link>
        </div >
    );
};

export default Login;