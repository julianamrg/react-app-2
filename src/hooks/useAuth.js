import { useState, useContext } from 'react';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { encryptPassword } from '../utils/encryption';

const useAuth = () => {
    const { state, dispatch } = useGlobalState();
    const [error, setError] = useState(null);

    const login = (email, password) => {
        const encryptedPassword = encryptPassword(password);
        // Simulate API call for login
        if (email && encryptedPassword) {
            // Assuming a successful login
            dispatch({ type: 'LOGIN', payload: { email } });
            setError(null);
        } else {
            setError('email inválido o contraseña inválida');
        }
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return { login, logout, error };
};

export default useAuth;