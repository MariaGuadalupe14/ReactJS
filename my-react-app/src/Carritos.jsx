import { useEffect, useState } from 'react';
import api from './Services/api';
import './Carritos.css';

function Carritos() {
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get('/carts');
        setCarritos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error al obtener carritos:', error);
      } finally {
        setCargando(false);
      }
    };

    obtenerCarritos();
  }, []);

  if (cargando) return <p>Cargando carritos...</p>;

  return (
    <div className="carritosDiv">
      <h1>Carritos</h1>
      <div className="carritosGrid">
        {carritos.map((carrito) => (
          <article className="carritoCard" key={carrito.id}>
            <h3>{carrito.id}</h3>
            <p><strong>Fecha:</strong> {carrito.date}</p>
            <p><strong>Productos:</strong></p>
            <ul className="carritoProductos">
              {carrito.products?.map((producto) => (
                <li key={producto.productId}>
                  productId: {producto.productId} _ Cantidad: {producto.quantity}
                  <button type="button" className="btnEliminarProducto">Eliminar</button>
                </li>
              ))}
            </ul>
            <button type="button" className="btnComprar">Comprar</button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Carritos;
