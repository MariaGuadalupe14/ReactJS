import './ContenedorTarjeta.css';
import tarjeta1 from './assets/tarjetas/tarjeta1.jpg';
import tarjeta2 from './assets/tarjetas/tarjeta2.jpg';

function ContenedorTarjeta() {
    return (
        <div className="contenedor-tarjeta">
            <Tarjeta titulo="Tarjeta 1" descripcion="Este es un paisaje........." imagen={tarjeta1} />
            <Tarjeta titulo="Tarjeta 2" descripcion="Este es un paisaje........." imagen={tarjeta2} />
            <Tarjeta titulo="Tarjeta 3" descripcion="Este es un paisaje........." imagen={tarjeta1} />
        </div>
    );
}

function Tarjeta({ titulo, descripcion, imagen }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href="#" className="ver-mas">Ver más</a>
        </div>
    );
}
export default ContenedorTarjeta;