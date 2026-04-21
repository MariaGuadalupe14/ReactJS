import { useEffect, useState } from "react";
import "./RegistrarProductos.css";
import api from "./Services/api";

function RegistrarProducto({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (productoEditado) {
      setNombre(productoEditado.nombre || "");
      setDescripcion(productoEditado.descripcion || "");
      setPrecio(productoEditado.precio || "");
      setStock(productoEditado.stock || "");
      setIdCategoria(productoEditado.id_categoria || "");
      setImagen(productoEditado.imagen || "");
      return;
    }

    resetForm();
  }, [productoEditado]);

  const resetForm = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setStock("");
    setIdCategoria("");
    setImagen("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = {
      nombre,
      descripcion,
      imagen,
      precio: Number(precio),
      stock: Number(stock),
      id_categoria: Number(idCategoria)
    };

    try {
      if (productoEditado) {
        const respuesta = await api.put(`/producto/${productoEditado.id}`, nuevoProducto);
        console.log("Producto actualizado:", respuesta.data);
        alert("Producto actualizado con exito");
        limpiarSeleccion();
      } else {
        const respuesta = await api.post("/producto", nuevoProducto);
        console.log("Producto registrado:", respuesta.data);
        alert("Producto registrado con exito");
        resetForm();
      }

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }
    } catch (error) {
      console.error("Error al registrar producto:", error);
      alert("Error al procesar la solicitud");
    }
  };

  return (
    <div>
      <div className="divForm">
        <h1 className="h1">Registrar Productos</h1>
        <form className="formularioProductos" onSubmit={handleSubmit}>
          <label>Nombre del producto:</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />

          <label>Precio:</label>
          <input
            type="number"
            name="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />

          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />

          <label>ID categoria:</label>
          <input
            type="number"
            name="id_categoria"
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            required
          />

          <label>URL de imagen:</label>
          <input
            type="text"
            name="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />

          <button type="submit" name="registrar">
            {productoEditado ? "Actualizar" : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrarProducto;
