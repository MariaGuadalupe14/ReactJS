import { useState } from 'react';
import './login.css';
import api from './Services/api';

function Login({ cambiarVista }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await api.post('/auth/login', { username, password });
      const token = respuesta.data?.token;
      console.log('Token recibido:', token);
      alert('Login exitoso');
      if (cambiarVista) cambiarVista('Inicio');
    } catch (error) {
      console.error('Error al iniciar sesion:', error);
      alert('Credenciales invalidas o error de servidor');
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
          <label htmlFor="username">Nombre del usuario:</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <span className="login-link">Crear cuenta</span>
          <span className="login-link">Recuperar cuenta</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
