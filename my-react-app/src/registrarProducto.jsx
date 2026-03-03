import { useEffect, useState } from "react";
import "./RegistrarProductos.css"
import api from "./Services/api";

function RegistrarProducto({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (productoEditado) {
      setTitle(productoEditado.title);
      setDescription(productoEditado.description);
      setPrice(productoEditado.price);
      setCategory(productoEditado.category);
      setImage(productoEditado.image);
    } else {
      resetForm();
    }
  }, [productoEditado]);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoProducto = {
      title,
      description,
      price: Number(price),
      category,
      image
    };

    try {
      if (productoEditado) {
        const respuesta = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
        console.log('Producto actualizado:', respuesta.data);
        alert('¡Producto actualizado con éxito!');
        limpiarSeleccion();
      } else {
        const respuesta = await api.post('/products', nuevoProducto);
        console.log('Producto registrado:', respuesta.data);
        alert('¡Producto registrado con éxito!');
        resetForm();
      }
      if (onActualizacionExitosa) onActualizacionExitosa();
    } catch (error) {
      console.error('Error al registrar producto:', error);
      alert('Error al procesar la solicitud');
    }
  }

  return (
    <div>
      <div className="divForm">
        <h1 className="h1">Registrar Productos</h1>
        <form className="formularioProductos" onSubmit={handleSubmit}>
          <label>Nombre del producto:</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>

          <label>Descripción:</label>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>

          <label>Precio:</label>
          <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>

          <label>Categoría:</label>
          <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}></input>

          <label>URL de imagen:</label>
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}></input>

          <button type="submit" name="registrar">Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrarProducto;
