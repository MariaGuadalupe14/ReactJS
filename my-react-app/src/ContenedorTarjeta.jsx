import './ContenedorTarjeta.css';
import imagen1 from './assets/tarjetas/tarjeta1.jpg';
import imagen2 from './assets/tarjetas/tarjeta2.jpg';

function ContenedorTarjeta() {
    return (
        <div className="contenedorDiv">
            <TarjetaComponent titulo="Java" descripcion="Lenguaje de programación orientado a objetos" imagen={imagen1} />
            <TarjetaComponent titulo="Python" descripcion="Lenguaje de programación interpretado" imagen={imagen2} />
            <TarjetaComponent titulo="JavaScript" descripcion="Lenguaje de programación para el desarrollo web"/>
            <TarjetaComponent titulo="PHP" descripcion="Lenguaje de programación para el desarrollo web"/>
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