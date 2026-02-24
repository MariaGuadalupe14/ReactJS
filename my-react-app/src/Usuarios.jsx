import { useEffect, useState } from 'react';
import api from './Services/api';
import './Usuarios.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get('/users');
        setUsuarios(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerUsuarios();
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;

  return (
    <div className="usuariosDiv">
      <h1>Tabla de Usuarios</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Calle</th>
            <th>Número</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name?.firstname} {usuario.name?.lastname}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.password}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.address?.city}</td>
              <td>{usuario.address?.street}</td>
              <td>{usuario.address?.number}</td>
              <td>
                <button type="button">Editar</button>
              </td>
              <td>
                <button type="button">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;
