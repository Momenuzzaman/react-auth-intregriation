/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';


const authContext = createContext();


const authProvider = () => {

    const allContext = useFirebase();

    return (
        <authContext.Provider value={allContext}>

        </authContext.Provider>
    );
};

export default authProvider;