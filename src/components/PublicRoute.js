import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }) => {
    const checkAuth = () => {
        console.log(localStorage.getItem('client'));
        return localStorage.getItem('client') === null;
    }

    return (
        <Route
            {...rest}
            element={checkAuth() ? children : <Unauthorized />}
        />
    );
}

const Unauthorized = () => {
    return (
        <div>
            <h2>Unauthorized Access</h2>
        </div>
    );
}

export default PublicRoute;
