import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../contexts/GlobalStateContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useGlobalState();
  const [isActive, setIsActive] = useState(false); // Estado para el menú

  const isLoggedIn = !!localStorage.getItem('AUTH_TOKEN');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  // Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="hero-head">
      <nav className="navbar has-background-info">
        <div className="container">
          <div className="navbar-brand has-background-info">
            <a
              role="button"
              className={`navbar-burger${isActive ? ' is-active' : ''}`}
              aria-label="menu"
              aria-expanded={isActive ? "true" : "false"}
              data-target="navbarBasicExample"
              onClick={toggleMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`has-background-info navbar-menu${isActive ? ' is-active' : ''}`}>
            <nav className='navbar-start'>
              <Link to="/" className='navbar-item is-size-3 has-text-dark'>
                Bienvenido
              </Link>
              <Link to="/company" className='navbar-item is-size-3 has-text-dark'>
                Empresas 
              </Link>
              <Link to="/products" className='navbar-item is-size-3 has-text-dark'>
                Productos
              </Link>
              <Link to="/inventory" className='navbar-item is-size-3 has-text-dark'>
                Inventario
              </Link>
            </nav>
          </div>    
          <div id="navbarMenuHeroB" className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isLoggedIn ? (
                  <>
                    <button
                      className="button is-light"
                      style={{ marginRight: '10px', fontWeight: 'bold' }}
                      onClick={handleLogin}
                    >
                      Ingresar
                    </button>
                    <button
                      className="button is-link"
                      style={{ fontWeight: 'bold' }}
                      onClick={handleRegister}
                    >
                      Registro
                    </button>
                  </>
                ) : (
                  <button
                    className="button is-light has-text-link"
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      border: 'none',
                      boxShadow: '0 2px 8px rgba(255,56,96,0.15)'
                    }}
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
