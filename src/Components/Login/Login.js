import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { singInWithGoogle } = useFirebase()
    return (
        <div>
            <h1>Please Login</h1>
            {/* <input type="text" /> */}
            <br />
            <button onClick={singInWithGoogle}>Sign in</button>
            <br />
            <Link to="/register">New User?</Link>
        </div >
    );
};

export default Login;