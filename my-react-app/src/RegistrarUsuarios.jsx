import { useEffect, useState } from 'react';
import './RegistrarUsuarios.css';
import api from './Services/api';

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');

  useEffect(() => {
    if (usuarioEditado) {
      setNombre(usuarioEditado.nombre || '');
      setDireccion(usuarioEditado.direccion || '');
      setTelefono(usuarioEditado.telefono || '');
      setEmail(usuarioEditado.email || '');
      setPassword(usuarioEditado.password || '');
      setRol(usuarioEditado.rol || 'cliente');
      return;
    }

    resetForm();
  }, [usuarioEditado]);

  const resetForm = () => {
    setNombre('');
    setDireccion('');
    setTelefono('');
    setEmail('');
    setPassword('');
    setRol('cliente');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      direccion,
      telefono,
      email,
      password,
      rol,
      fecha_registro: usuarioEditado?.fecha_registro || new Date().toISOString()
    };

    try {
      if (usuarioEditado) {
        const respuesta = await api.put(`/usuario/${usuarioEditado.id}`, nuevoUsuario);
        console.log('Usuario actualizado:', respuesta.data);
        alert('Usuario actualizado con exito');
        limpiarSeleccion();
      } else {
        const respuesta = await api.post('/usuario', nuevoUsuario);
        console.log('Usuario registrado:', respuesta.data);
        alert('Usuario registrado con exito');
        resetForm();
      }

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al procesar la solicitud');
    }
  };

  return (
    <div>
      <div className="divForm">
        <h1 className="h1">Registrar Usuarios</h1>
        <form className="formularioProductos" onSubmit={handleSubmit}>
          <label>Nombre del usuario:</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Direccion:</label>
          <input
            type="text"
            name="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />

          <label>Telefono:</label>
          <input
            type="text"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Rol:</label>
          <select name="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
            <option value="cliente">Cliente</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" name="registrar">
            {usuarioEditado ? 'Actualizar' : 'Registrar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrarUsuarios;
