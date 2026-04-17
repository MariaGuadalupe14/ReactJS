import { useEffect, useState } from 'react';
import api from './Services/api';
import './Carritos.css';
import { useAuth } from './AuthContext';

function Carritos() {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [detallesCarrito, setDetallesCarrito] = useState({});
  const { isLoggedIn } = useAuth();

  const obtenerCarritos = async () => {
    try {
      const response = await api.get('/carritos');
      setCarritos(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error al obtener carritos:', error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerDetallesCarrito = async (id_carrito) => {
    try {
      const response = await api.get('/carrito_detalles');
      const detalles = response.data.filter(d => d.id_carrito === id_carrito);
      setDetallesCarrito(prev => ({
        ...prev,
        [id_carrito]: detalles
      }));
    } catch (error) {
      console.error('Error al obtener detalles del carrito:', error);
    }
  };

  const eliminarCarrito = async (id) => {
    if (!window.confirm('¿Está seguro de que desea eliminar este carrito?')) return;
    try {
      await api.delete(`/carrito/${id}`);
      obtenerCarritos();
      alert('Carrito eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar carrito:', error);
      alert('Error al eliminar el carrito');
    }
  };

  const eliminarDetalleCarrito = async (id_detalle) => {
    try {
      await api.delete(`/carrito_detalle/${id_detalle}`);
      alert('Producto eliminado del carrito');
      // Recargar detalles
      const response = await api.get('/carrito_detalles');
      setDetallesCarrito({});
    } catch (error) {
      console.error('Error al eliminar detalle:', error);
      alert('Error al eliminar el producto');
    }
  };

  useEffect(() => {
    obtenerCarritos();
  }, []);

  if (cargando) return <p>Cargando carritos...</p>;

  return (
    <div className="carritosDiv">
      <h1>Carritos</h1>
      <div className="carritosGrid">
        {carritos.map((carrito) => (
          <article className="carritoCard" key={carrito.id}>
            <h3>Carrito #{carrito.id}</h3>
            <p><strong>Usuario ID:</strong> {carrito.id_usuario}</p>
            <p><strong>Fecha Creación:</strong> {new Date(carrito.fecha_creacion).toLocaleDateString()}</p>
            <p><strong>Total:</strong> ${carrito.total}</p>
            <p><strong>Estado:</strong> <span className={`estado-${carrito.estado}`}>{carrito.estado}</span></p>
            
            <button 
              type="button" 
              className="btnVerDetalles"
              onClick={() => obtenerDetallesCarrito(carrito.id)}
            >
              Ver Detalles
            </button>

            {detallesCarrito[carrito.id] && (
              <div className="carritoDetalles">
                <p><strong>Productos:</strong></p>
                <ul className="carritoProductos">
                  {detallesCarrito[carrito.id].map((detalle) => (
                    <li key={detalle.id}>
                      <span>Producto ID: {detalle.id_producto}</span>
                      <span>Cantidad: {detalle.cantidad}</span>
                      <span>Precio Unit: ${detalle.precio_unitario}</span>
                      <span>Subtotal: ${(detalle.precio_unitario * detalle.cantidad).toFixed(2)}</span>
                      {isLoggedIn && (
                        <button 
                          type="button" 
                          className="btnEliminarProducto"
                          onClick={() => eliminarDetalleCarrito(detalle.id)}
                        >
                          Eliminar
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isLoggedIn && (
              <>
                <button type="button" className="btnComprar">Comprar</button>
                <button 
                  type="button" 
                  className="btnEliminarCarrito"
                  onClick={() => eliminarCarrito(carrito.id)}
                >
                  Eliminar Carrito
                </button>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Carritos;