import { useEffect, useState } from 'react';
import api from './Services/api';
import './Productos.css';
import RegistrarProducto from './registrarProducto';
import { useAuth } from './AuthContext';

function Productos() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [actualizarLista, setActualizarLista] = useState(0);
  const { isAdmin } = useAuth();

  const limpiarSeleccion = () => setProductoSeleccionado(null);
  const onActualizacionExitosa = () => setActualizarLista((valor) => valor + 1);

  return (
    <div className="ContenedorUsuarios">
      {isAdmin && (
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
  const { isAdmin } = useAuth();

  const obtenerProductos = async () => {
    try {
      const response = await api.get('/productos');
      setProductos(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeProducto = async (id) => {
    try {
      await api.delete(`/producto/${id}`);
      obtenerProductos();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
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
              <img src={producto.imagen} alt={producto.nombre} />
              <span>{producto.descripcion}</span>
              <h2>Categoria: {producto.id_categoria}</h2>
              <p>Precio: ${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
              <button type="button">Anadir al carrito</button>
              {isAdmin && (
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
