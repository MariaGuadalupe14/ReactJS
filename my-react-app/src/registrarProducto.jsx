import { useState } from 'react';
import './registrarProducto.css';

function RegistrarProducto({ onRegistrar }) {
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [urlImagen, setUrlImagen] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = nombreProducto.trim();
    const precio = Number(precioProducto);

    if (!nombre || Number.isNaN(precio) || precio <= 0) {
      return;
    }

    const nuevoProducto = {
      id: Date.now(),
      title: nombre,
      price: precio,
      image: urlImagen.trim() || 'https://via.placeholder.com/300x300?text=Producto'
    };

    if (typeof onRegistrar === 'function') {
      onRegistrar(nuevoProducto);
    }

    setNombreProducto('');
    setPrecioProducto('');
    setUrlImagen('');
  };

  return (
    <section className="registroProducto">
      <div className="registroProductoHeader">
        <h2>Registrar producto</h2>
        <p>Completa los datos y agrégalo al catálogo.</p>
      </div>

      <form className="registroProductoForm" onSubmit={handleSubmit}>
        <div className="campoForm campoFormGrande">
          <label htmlFor="nombreProducto">Nombre</label>
          <input
            id="nombreProducto"
            type="text"
            name="nombreProducto"
            value={nombreProducto}
            onChange={(event) => setNombreProducto(event.target.value)}
            placeholder="Ej. Camisa oversize blanca"
            required
          />
        </div>

        <div className="campoForm">
          <label htmlFor="precioProducto">Precio</label>
          <input
            id="precioProducto"
            type="number"
            name="precioProducto"
            value={precioProducto}
            onChange={(event) => setPrecioProducto(event.target.value)}
            min="0.01"
            step="0.01"
            placeholder="0.00"
            required
          />
        </div>

        <div className="campoForm campoFormGrande">
          <label htmlFor="urlImagen">Imagen (URL)</label>
          <input
            id="urlImagen"
            type="text"
            name="urlImagen"
            value={urlImagen}
            onChange={(event) => setUrlImagen(event.target.value)}
            placeholder="https://..."
          />
        </div>

        <button className="btnRegistrar" type="submit">
          Guardar producto
        </button>
      </form>
    </section>
  );
}

export default RegistrarProducto;
