import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateUser } from '../services/api';
import LoadingSpinner from '../components/atoms/LoadingSpinner';

const PrivateRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('AUTH_TOKEN');
            if (!token) {
                setIsAuth(false);
                setLoading(false);
                return;
            }
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
    return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;