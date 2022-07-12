import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectRoute = ({ children }) => {
    const { user } = useAuth();

    return (
        <div>
            {user.displayName ? children : <Navigate to="/login"></Navigate>}
        </div>
    );
};

export default ProtectRoute;