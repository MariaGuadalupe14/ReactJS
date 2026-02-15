import Mapa from './Mapa';
import './Sucursales.css';

const SUCURSALES = [
  {
    nombre: 'Sucursal Centro',
    direccion: 'Calle Hidalgo 123, Col. Centro, Poza Rica, Veracruz',
    telefono: '+52 782 000 0001',
    imagen: '',
    latitud: 20.27657415896826,
    longitud: -97.9642692798461,
  },
  {
    nombre: 'Sucursal Norte',
    direccion: 'Av. 20 de Noviembre 456, Col. Obrera, Poza Rica, Veracruz',
    telefono: '+52 782 000 0002',
    imagen: '',
    latitud: 20.276191177580813,
    longitud: -97.95967610900618,
  },
  {
    nombre: 'Sucursal Sur',
    direccion: 'Calle 16 de Septiembre 789, Col. Petromex, Poza Rica, Veracruz',
    telefono: '+52 782 000 0003',
    imagen: '',
    latitud: 20.275604735498444,
    longitud: -97.96429479746189,
  },
  {
    nombre: 'Sucursal Este',
    direccion: 'Boulevard Adolfo Ruiz Cortines 321, Col. Tajin, Poza Rica, Veracruz',
    telefono: '+52 782 000 0004',
    imagen: '',
    latitud: 20.275640456995326,
    longitud: -97.95872224112566,
  },
];

function Sucursales() {
  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales</h2>
      <div className="lista-sucursales">
        {SUCURSALES.map((sucursal) => (
          <TarjetaSucursal key={sucursal.nombre} {...sucursal} />
        ))}
      </div>
    </section>
  );
}

function TarjetaSucursal({ nombre, direccion, telefono, imagen, latitud, longitud }) {
  return (
    <article className="sucursal">
      {imagen ? <img src={imagen} alt={`Logo de ${nombre}`} /> : null}
      <h3>{nombre}</h3>
      <p className="direccion">{direccion}</p>
      <Mapa lat={latitud} lng={longitud} nombre_sucursal={nombre} />
      <p>{telefono}</p>
      <a href="#">Ver mas</a>
    </article>
  );
}

export default Sucursales;
