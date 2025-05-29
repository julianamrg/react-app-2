import React, { useState } from 'react';
import { useGlobalState } from '../../contexts/GlobalStateContext';
import './Login.css'
import { registerUser } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
    const { setUser } = useGlobalState();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        rol: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Nuevo estado para loading

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
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
        if (!form.rol) newErrors.rol = 'El rol es obligatorio';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setLoading(true);
        try {
            await registerUser(form);
            setLoading(false);
            toast.success('Usuario creado correctamente');
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (err) {
            setLoading(false);
            if (
                err.response &&
                err.response.data &&
                Array.isArray(err.response.data.errors)
            ) {
                const backendErrors = [];
                err.response.data.errors.forEach(error => {
                    console.log(error.msg)
                    backendErrors.push(error.msg);
                });
                setError(backendErrors);
            } else {
                setError(['Error al registrar usuario']);
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
        <>
            <ToastContainer />
            <div className="hero is-info is-medium fondo">
                <div className='hero-body' >
                    <div className='container'>
                        <div className='columns is-centered'>
                            <div className='column is-4'>   
                                <form className='box' onSubmit={handleSubmit}>
                                    <div className='field'>
                                        <label className='label is-size-4'>
                                            Nombre
                                        </label>
                                        <div className="control has-icons-left">
                                            <input 
                                                type="text" 
                                                className="input pl-3" 
                                                placeholder="john doe" 
                                                name="name" 
                                                value={form.name}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                            />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                        {errors.name && (
                                            <p className="help is-danger">{errors.name}</p>
                                        )}
                                    </div>

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
                                            Contraseña
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

                                    <div className='field'>
                                        <label className='label is-size-4'>
                                            Rol
                                        </label>
                                        <div className="control has-icons-left">
                                            <select
                                                className="input pl-3" 
                                                name="rol" 
                                                value={form.rol}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                            >
                                                <option value="" disabled>Seleccione un rol</option>
                                                <option value="admin">Administrador</option>
                                                <option value="externo">Externo</option>
                                            </select>
                                        </div>
                                        {errors.rol && (
                                            <p className="help is-danger">{errors.rol}</p>
                                        )}
                                    </div>
                                    <div className="field">
                                        <button className="button is-centered is-info login-btn " type="submit" disabled={loading}>
                                            <strong>
                                                {loading ? 'Registrando...' : 'Registrar'}
                                            </strong>
                                        </button>
                                    </div>
                                    {error.length > 0 && (
                                        error.map((err, index) => (
                                            <p key={index} className="help is-danger">{err}</p>
                                        ))
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;