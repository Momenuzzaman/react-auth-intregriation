import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user } = useFirebase()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">New User?</Link>
            <Link to="/login">Login</Link>
            {user.email && <button>Sign in out</button>}
        </div>
    );
};

export default Header;