import React, { useState } from 'react';
import api from './Services/api';
import './Login.css';
import { useAuth } from './AuthContext';

const Login = ({ cambiarVista }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credenciales = { email, password };

    try {
      const respuesta = await api.post('/login', credenciales);
      const data = respuesta.data;

      if (data.token && data.usuario) {
        login(data.token, data.usuario);
        alert(data.usuario.rol === 'admin' ? 'Acceso de administrador autorizado' : 'Sesion iniciada como cliente');
        cambiarVista && cambiarVista('Inicio');
      } else {
        alert('Credenciales invalidas');
      }
    } catch (error) {
      alert('Error al iniciar sesion');
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-avatar">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/296/443/non_2x/user-icon-person-icon-client-symbol-profile-icon-vector.jpg"
            alt="Icono de usuario"
          />
        </div>
        <h1 className="login-title">Iniciar sesion</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electronico:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" name="iniciar">Acceder</button>
          <button
            type="button"
            className="login-cancel"
            onClick={() => cambiarVista && cambiarVista('Inicio')}
          >
            Cancelar
          </button>
        </form>

        <div className="login-extra-links">
          <span
            className="login-link"
            onClick={() => cambiarVista && cambiarVista('RegistrarUsuarios')}
          >
            Crear cuenta
          </span>
          <span className="login-link">Recuperar cuenta</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
