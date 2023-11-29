import React from 'react'
import MoviesProvider from '../../context/MoviesProvider';
import { Navigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

const RequireAuth = ({ children }) => {
    const { currentUser } = useAuth()
    return currentUser ? (
        <>
            <MoviesProvider>
                {children}
            </MoviesProvider>
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default RequireAuth