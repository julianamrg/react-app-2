import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateUser } from '../services/api';
import LoadingSpinner from '../components/atoms/LoadingSpinner';

const PublicRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await validateUser();
                setIsAuth(true);
            } catch {
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (loading) return <LoadingSpinner />;
    return !isAuth ? children : <Navigate to="/" />;
};

export default PublicRoute;