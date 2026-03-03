import { useEffect, useState } from "react";
import "./RegistrarUsuarios.css"
import api from "./Services/api";

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (usuarioEditado) {
      setUsername(usuarioEditado.username);
      setEmail(usuarioEditado.email);
      setPassword(usuarioEditado.password);
    } else {
      resetForm();
    }
  }, [usuarioEditado]);

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { username, email, password };
    try {
      if (usuarioEditado) {
        const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
        console.log('Usuario actualizado:', respuesta.data);
        alert('¡Usuario actualizado con éxito!');
        limpiarSeleccion();
      } else {
        const respuesta = await api.post('/users', nuevoUsuario);
        console.log('Usuario registrado:', respuesta.data);
        alert('¡Usuario registrado con éxito!');
        resetForm();
      }
      if (onActualizacionExitosa) onActualizacionExitosa();
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al procesar la solicitud');
    }
  }

  return (
    <div>
      <div className="divForm">
        <h1 className="h1">Registrar Usuarios</h1>
        <form className="formularioProductos" onSubmit={handleSubmit}>
          <label>Nombre del usuario:</label>
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button type="submit" name="registrar">Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrarUsuarios;
