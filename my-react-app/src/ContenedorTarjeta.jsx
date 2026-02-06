import './ContenedorTarjeta.css';
import imagen1 from './assets/ropa/camisa.jpg';
import imagen2 from './assets/ropa/jeans.jpg';
import imagen3 from './assets/ropa/chaqueta.jpeg';
import imagen4 from './assets/ropa/vestido.jpeg';


function ContenedorTarjeta() {
    return (
        <div className="contenedorDiv">
            <TarjetaComponent 
              titulo="Camisa Casual" 
              descripcion="Cómoda y elegante para el día a día." 
              imagen={imagen1} 
            />
            <TarjetaComponent 
              titulo="Pantalones Jeans" 
              descripcion="Clásicos y resistentes para cualquier ocasión." 
              imagen={imagen2} 
            />
            <TarjetaComponent 
              titulo="Chaqueta de Cuero" 
              descripcion="Estilo y protección para los días frescos." 
              imagen={imagen3} 
            />
            <TarjetaComponent titulo="Vestido" 
              descripcion="Ligero y colorido para eventos." 
              imagen={imagen4} 
            />
        </div>
    );
}


function TarjetaComponent(props) {
    return (
        <div className='tarjetaDiv'>
            <img src={props.imagen} alt="Logotipo" />
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            <a href="#">Ver más</a>
        </div>
    );
}

export default ContenedorTarjeta;