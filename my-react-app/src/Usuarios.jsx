import { useEffect, useState } from "react";
import api from "./Services/api";
import "./Usuarios.css";
import RegistrarUsuarios from "./RegistrarUsuarios";
import { useAuth } from "./AuthContext";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const { isLoggedIn } = useAuth();

  const obtenerUsuarios = async () => {
    try {
      const response = await api.get("/usuarios");
      setUsuarios(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setCargando(false);
    }
  };

  const removeUsuario = async (id) => {
    try {
      await api.delete(`/usuario/${id}`);
      obtenerUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;

  return (
    <>
      <div className="ContenedorUsuarios">
        {isLoggedIn && (
          <RegistrarUsuarios
            usuarioEditado={usuarioSeleccionado}
            limpiarSeleccion={() => setUsuarioSeleccionado(null)}
            onActualizacionExitosa={obtenerUsuarios}
          />
        )}
      </div>

      <div className="usuariosDiv">
        <h1>Tabla de Usuarios</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Rol</th>
              <th>Fecha Registro</th>
              {isLoggedIn && <th>Editar</th>}
              {isLoggedIn && <th>Eliminar</th>}
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.direccion}</td>
                <td>{usuario.rol}</td>
                <td>{new Date(usuario.fecha_registro).toLocaleDateString()}</td>
                {isLoggedIn && (
                  <td>
                    <button type="button" onClick={() => setUsuarioSeleccionado(usuario)}>
                      Editar
                    </button>
                  </td>
                )}
                {isLoggedIn && (
                  <td>
                    <button type="button" onClick={() => removeUsuario(usuario.id)}>
                      Eliminar
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Usuarios;