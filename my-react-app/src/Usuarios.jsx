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
      const response = await api.get("/users");
      setUsuarios(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setCargando(false);
    }
  };

  const removeUsuario = async (id) => {
    try {
      await api.delete(`/users/${id}`);
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
              <th>Usuario</th>
              <th>Email</th>
              <th>Contrasena</th>
              <th>Telefono</th>
              <th>Ciudad</th>
              <th>Calle</th>
              <th>Numero</th>
              {isLoggedIn && <th>Editar</th>}
              {isLoggedIn && <th>Eliminar</th>}
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>
                  {usuario.name?.firstname} {usuario.name?.lastname}
                </td>
                <td>{usuario.username}</td>
                <td>{usuario.email}</td>
                <td>{usuario.password}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.address?.city}</td>
                <td>{usuario.address?.street}</td>
                <td>{usuario.address?.number}</td>
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
