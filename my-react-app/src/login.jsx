import React, { useState } from 'react';
import api from "./Services/api";
import './Login.css'
import { useAuth } from './AuthContext';

const Login = ({ cambiarVista }) => {
  const { login } = useAuth(); //Se hereda la funciÃ³n login del contexto de autenticaciÃ³n
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const credenciales = { username, password };
  try {
      const respuesta = await api.post('/auth/login/', credenciales);
      const data = respuesta.data;
    if (data.token) {
      login(data.token); // Guardamos el token en el contexto
      console.log('Token:', data.token);
      // Redirigir al usuario aqui
      alert('Autenticacion autorizada'); 
    } else {
      alert('Credenciales invÃ¡lidas');
    }
  } catch (error) {
    alert('Error', error);
    console.error("Error:", error);
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
}

export default Login;
