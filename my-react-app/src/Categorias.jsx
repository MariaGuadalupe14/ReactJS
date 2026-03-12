import React, { useEffect, useState } from 'react';
import './Categorias.css';
import { useAuth } from './AuthContext';
import mealdbApi from './Services/mealdbApi';

function Categorias() {
  const { isLoggedIn } = useAuth();
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) return;

    const obtenerCategorias = async () => {
      try {
        setCargando(true);
        setError(null);
        const response = await mealdbApi.get('/categories.php');
        const data = response?.data;
        setCategorias(Array.isArray(data?.categories) ? data.categories : []);
      } catch (err) {
        console.error('Error al cargar categorias:', err);
        setError('No se pudieron cargar las categorias');
        setCategorias([]);
      } finally {
        setCargando(false);
      }
    };

    obtenerCategorias();
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;
  if (cargando) return <div className="categorias-loading">Cargando categorias...</div>;
  if (error) return <div className="categorias-loading">{error}</div>;
  if (!categorias.length) return null;

  return (
    <main className="categoriasMain">
      <header>
        <h1>Categorias</h1>
      </header>
      <section className="categoriasSection">
        {categorias.map((cat) => (
          <article className="categoriasCard" key={cat.idCategory}>
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <span>{cat.strCategoryDescription}</span>
            <h2>{cat.strCategory}</h2>
            <div className="categoriaMeta">ID: {cat.idCategory}</div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Categorias;
