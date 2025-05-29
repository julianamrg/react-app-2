import React, { useContext, useState, useEffect } from 'react';
import { GlobalStateContext, useGlobalState } from '../contexts/GlobalStateContext';
import LoginForm from '../components/organisms/LoginForm';
import { loginUser } from '../services/api';
import RegisterForm from '../components/organisms/RegisterForm';

const RegisterPage = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
        } catch (err) {
            setError('Invalid credentials');
        }
    };
    

    return (
        <div className="login-page">
          
            {error && <p className="error">{error}</p>}
            <RegisterForm 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin} 
            />
        </div>
    );
};

export default RegisterPage;