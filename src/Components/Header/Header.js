import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Sipping</Link>
            <Link to="/register">New User?</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName}</span>
            {user.displayName && <button onClick={logOut}>Sign in out</button>}
        </div>
    );
};

export default Header;