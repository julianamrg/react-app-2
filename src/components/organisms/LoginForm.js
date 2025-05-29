import React, { useState } from 'react';
import { useGlobalState } from '../../contexts/GlobalStateContext';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import './Login.css'
import { loginUser } from '../../services/api';

const LoginForm = () => {
    const { setUser } = useGlobalState();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!form.email.trim()) {
            newErrors.email = 'El email es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'El email no es válido';
        }
        if (!form.password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (form.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            await loginUser(form);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            if (
                err.response &&
                err.response.data &&
                err.response.data.msg
            ) {
                setError(err.response.data.msg);
            } else {
                setError('Email o contraseña inválidos');
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    return (
        <div className="hero is-info is-medium fondo">
            <div className='hero-body' >
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-4'>   
                            <form className='box' onSubmit={handleSubmit}>
                                <div className='field'>
                                    <label className='label is-size-4'>
                                        Email
                                    </label>
                                    <div className="control has-icons-left">
                                        <input 
                                            type="text" 
                                            className="input pl-3" 
                                            placeholder="john@example.com" 
                                            name="email" 
                                            value={form.email}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    {errors.email && (
                                        <p className="help is-danger">{errors.email}</p>
                                    )}
                                </div>

                                <div className="field">
                                    <label className="label is-size-4">
                                        Password
                                    </label>
                                    <div className="control has-icons-left">
                                        <input 
                                            type="password" 
                                            className="inpu pl-3" 
                                            placeholder="password" 
                                            name="password" 
                                            value={form.password}
                                            onChange={handleInputChange}
                                            disabled={loading}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    {errors.password && (
                                        <p className="help is-danger">{errors.password}</p>
                                    )}
                                </div>
                                <div className="field">
                                    <button className="button is-centered is-info login-btn " type="submit" disabled={loading}>
                                        <strong>
                                            {loading ? 'Ingresando...' : 'Login'}
                                        </strong>
                                    </button>
                                </div>
                                {error && (
                                    <p className="help is-danger">{error}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;