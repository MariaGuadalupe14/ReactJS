import "./RegistrarProductos.css"
import { useState } from 'react';
import api from './Services/api';

/**
function RegistrarProductos() {
  const [productos, setProductos] = useState({
    title: '',
    descripcion: '',
    price: '',
    image: '',
    category: '',
    image: ''
  });

  const handlechange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      await api.post('/products', productos);
      alert('Producto registrado exitosamente');
      console.log(productos);
      setProductos({
        title: '',
        descripcion: '',
        price: '',
        image: '',
        category: '',
        image: ''
      })
    } catch (error) {
      console.error('Error al registrar producto:', error)
    }
  };



  return (
    <div>
      <h1 className="h1">Registrar Productos</h1>
      <form onSubmit={handleSubmit}>

      </form>
      <div className="divForm">
        <RegistroProducto />
      </div>

    </div>
  );
*/
  function RegistroProducto() {
    return (
      <form className="formularioProductos">
        <label>Producto:</label>
        <input type="text" name="producto"></input>
        <label>Precio:</label>
        <input type="text" name="precio"></input>
        <button type="submit" name="registrar">Registrar</button>
      </form>
    )
  }
/**  } */

export default RegistroProducto;
