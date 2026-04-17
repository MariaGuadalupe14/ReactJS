import React, { useEffect, useState } from 'react';
import './Categorias.css';
import { useAuth } from './AuthContext';
import api from './Services/api';

function Categorias() {
  const { isLoggedIn } = useAuth();
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [nombreNueva, setNombreNueva] = useState('');

  const obtenerCategorias = async () => {
    try {
      setCargando(true);
      setError(null);
      const response = await api.get('/categorias');
      setCategorias(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Error al cargar categorías:', err);
      setError('No se pudieron cargar las categorías');
      setCategorias([]);
    } finally {
      setCargando(false);
    }
  };

  const crearCategoria = async (e) => {
    e.preventDefault();
    if (!nombreNueva.trim()) {
      alert('El nombre no puede estar vacío');
      return;
    }
    try {
      await api.post('/categoria', { nombre: nombreNueva });
      setNombreNueva('');
      obtenerCategorias();
      alert('Categoría creada correctamente');
    } catch (err) {
      console.error('Error al crear categoría:', err);
      alert('Error al crear la categoría');
    }
  };

  const eliminarCategoria = async (id) => {
    if (!window.confirm('¿Está seguro de que desea eliminar esta categoría?')) return;
    try {
      await api.delete(`/categoria/${id}`);
      obtenerCategorias();
      alert('Categoría eliminada correctamente');
    } catch (err) {
      console.error('Error al eliminar categoría:', err);
      alert('Error al eliminar la categoría');
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  if (cargando) return <div className="categorias-loading">Cargando categorías...</div>;
  if (error) return <div className="categorias-loading">{error}</div>;

  return (
    <main className="categoriasMain">
      <header>
        <h1>Categorías</h1>
      </header>

      {isLoggedIn && (
        <div className="formularioCategoria">
          <h2>Nueva Categoría</h2>
          <form onSubmit={crearCategoria}>
            <input
              type="text"
              placeholder="Nombre de la categoría"
              value={nombreNueva}
              onChange={(e) => setNombreNueva(e.target.value)}
            />
            <button type="submit">Crear</button>
          </form>
        </div>
      )}

      <section className="categoriasSection">
        {categorias.length > 0 ? (
          categorias.map((cat) => (
            <article className="categoriasCard" key={cat.id}>
              <h2>{cat.nombre}</h2>
              <div className="categoriaMeta">ID: {cat.id}</div>
              {isLoggedIn && (
                <button 
                  type="button" 
                  className="btn-eliminar"
                  onClick={() => eliminarCategoria(cat.id)}
                >
                  Eliminar
                </button>
              )}
            </article>
          ))
        ) : (
          <p>No hay categorías disponibles</p>
        )}
      </section>
    </main>
  );
}

export default Categorias;