import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyPage from '../pages/CompanyPage';
import ProductsPage from '../pages/ProductsPage';
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import HomePage from '../pages/HomePage';
import { Navbar } from '../components/organisms/Navbar';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoadingSpinner from '../components/atoms/LoadingSpinner';
import FadeTransition from '../components/atoms/FadeTransition';

const AppRouter = () => {
    const [loading, setLoading] = useState(false);

    return (
        <Router>
            <Navbar/>
            <Suspense
                fallback={
                    <FadeTransition show={true}>
                        <LoadingSpinner />
                    </FadeTransition>
                }
            >
                <FadeTransition show={!loading}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        } />
                        <Route path="/register" element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        } />
                        <Route path="/" element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        } />
                        <Route path="/company" element={
                            <PrivateRoute>
                                <CompanyPage />
                            </PrivateRoute>
                        } />
                        <Route path="/products" element={
                            <PrivateRoute>
                                <ProductsPage />
                            </PrivateRoute>
                        } />
                        <Route path="/inventory" element={
                            <PrivateRoute>
                                <InventoryPage />
                            </PrivateRoute>
                        } />
                    </Routes>
                </FadeTransition>
            </Suspense>
        </Router>
    );
};

export default AppRouter;