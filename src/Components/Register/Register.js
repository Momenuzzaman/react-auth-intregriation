import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Please Register</h1>
            <form>
                <input type="text" />
                <br />
                <input type="password" />
                <input type="submit" value="submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;