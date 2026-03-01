import { useEffect, useState } from "react";
import api from "./Services/api";
import './Productos.css';
import RegistrarProducto from './registrarProducto';


function Productos(){
    return(
        <div className="ContenedorUsuarios"> 
        <RegistrarProducto />
        <Producto />
        </div>
        
    );
}

function Producto() {
    //https://fakestoreapi.com/docs npm install axios

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <main className='classMain'>
                <header>
                    <h1>Nuestro Catálogo</h1>
                </header>
                <section className='classSection'>
                    {productos.map((producto) => (
                        <article key={producto.id} className='classArticle'>
                            <img
                                src={producto.image}
                                alt={producto.title}
                            />
                            <span>
                                {producto.description}
                            </span>
                            <h2>{producto.category}</h2>
                            <p>
                                {producto.price}
                            </p>
                            <button>
                                Añadir al carrito
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Productos;
