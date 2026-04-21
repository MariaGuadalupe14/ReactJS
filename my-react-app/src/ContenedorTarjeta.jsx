import AcercaDe from './AcercaDe';
import './ContenedorTarjeta.css';
import './AcercaDe.jsx';
import Productos from './Productos';
import Usuarios from './Usuarios';
import Carritos from './Carritos';
import Categorias from './Categorias';
import Contacto from './Contacto';
import Sucursales from './Sucursales';
import Galeria from './Galeria';
import RegistrarUsuarios from './RegistrarUsuarios.jsx';
import Login from './Login.jsx';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';

const ADMIN_VIEWS = new Set(['Usuarios', 'Categorias', 'Carritos']);

function ContenedorTarjeta({ vista, cambiarVista }) {
  const { isAdmin } = useAuth();

  if (ADMIN_VIEWS.has(vista) && !isAdmin) {
    return (
      <div className='contenedorDiv'>
        <NoAutorizado cambiarVista={cambiarVista} />
      </div>
    );
  }

  const vistas = {
    Inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Usuarios: <Usuarios />,
    Categorias: <Categorias />,
    RegistrarUsuarios: <RegistrarUsuarios />,
    Carritos: <Carritos />,
    Contacto: <Contacto />,
    Sucursales: <Sucursales />,
    Galeria: <Galeria />,
    Login: <Login cambiarVista={cambiarVista} />
  };

  return (
    <div className='contenedorDiv'>
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function NoAutorizado({ cambiarVista }) {
  return (
    <div className='tarjetaDiv'>
      <h3>Acceso restringido</h3>
      <p>Solo los administradores pueden entrar al panel de gestion.</p>
      <button type='button' onClick={() => cambiarVista('Inicio')}>Volver al inicio</button>
    </div>
  );
}

NoAutorizado.propTypes = {
  cambiarVista: PropTypes.func
};

function Inicio() {
  return (
    <>
      <TarjetaComponent
        titulo="Camisa Casual"
        descripcion="Comoda y elegante para el dia a dia."
        imagen="https://m.media-amazon.com/images/I/51vb0FSBdIL._AC_SX679_.jpg"
      />
      <TarjetaComponent
        titulo="Pantalones Jeans"
        descripcion="Clasicos y resistentes para cualquier ocasion."
        imagen="https://m.media-amazon.com/images/I/61YzfMikbqL._AC_SX342_SY445_QL70_ML2_.jpg"
      />
      <TarjetaComponent
        titulo="Chaqueta de Cuero"
        descripcion="Estilo y proteccion para los dias frescos."
        imagen="data:image/jpeg;base64,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"
      />
      <TarjetaComponent
        titulo="Vestido"
        descripcion="Ligero y colorido para eventos."
        imagen="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
      />
    </>
  );
}

function TarjetaComponent(props) {
  return (
    <div className='tarjetaDiv'>
      <img src={props.imagen} alt="Logotipo" />
      <h3>{props.titulo}</h3>
      <p>{props.descripcion}</p>
      <a href="#">Ver mas</a>
    </div>
  );
}

ContenedorTarjeta.propTypes = {
  vista: PropTypes.string.isRequired,
  cambiarVista: PropTypes.func
};

export default ContenedorTarjeta;
