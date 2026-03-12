import { useEffect, useState } from "react";
import api from "./Services/api";
import "./Productos.css";
import RegistrarProducto from "./registrarProducto";
import { useAuth } from "./AuthContext";

function Productos() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [actualizarLista, setActualizarLista] = useState(0);
  const { isLoggedIn } = useAuth();

  const limpiarSeleccion = () => setProductoSeleccionado(null);
  const onActualizacionExitosa = () => setActualizarLista((valor) => valor + 1);

  return (
    <div className="ContenedorUsuarios">
      {isLoggedIn && (
        <RegistrarProducto
          productoEditado={productoSeleccionado}
          limpiarSeleccion={limpiarSeleccion}
          onActualizacionExitosa={onActualizacionExitosa}
        />
      )}
      <Producto onEditar={setProductoSeleccionado} actualizarLista={actualizarLista} />
    </div>
  );
}

function Producto({ onEditar, actualizarLista }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();

  const obtenerProductos = async () => {
    try {
      const response = await api.get("/products");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeProducto = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      obtenerProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, [actualizarLista]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <main className="classMain">
        <header>
          <h1>Nuestro Catalogo</h1>
        </header>
        <section className="classSection">
          {productos.map((producto) => (
            <article key={producto.id} className="classArticle">
              <img src={producto.image} alt={producto.title} />
              <span>{producto.description}</span>
              <h2>{producto.category}</h2>
              <p>{producto.price}</p>
              <button type="button">Anadir al carrito</button>
              {isLoggedIn && (
                <>
                  <button type="button" onClick={() => onEditar(producto)}>
                    Editar
                  </button>
                  <button type="button" onClick={() => removeProducto(producto.id)}>
                    Eliminar
                  </button>
                </>
              )}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Productos;
