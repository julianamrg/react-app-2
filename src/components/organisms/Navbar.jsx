import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../contexts/GlobalStateContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useGlobalState();

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

  return (
    <div className="hero-head">
      <nav className="navbar has-background-info">
        <div className="container">
          <div className="navbar-brand">
            {/* <img className= "navbar-item" src={logo}  alt="Logo" /> */}
          </div>
          <div className="navbar-menu">
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
                      // background: 'linear-gradient(90deg, #ff3860 0%, #ff6f61 100%)',
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
