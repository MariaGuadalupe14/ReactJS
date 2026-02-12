import Mapa from './Mapa';
import './PromosContenido.css';

function PromosContenido() {
  return (
    <div className="promosContenido">
      <h2>Promociones</h2>
      <p>Contenido de promociones aquÃ­</p>
      <Mapa lat={20.276247346277895} 
      lng={-97.95828426659142} 
      nombre_sucursal={'Sucursal Centro'} />
    </div>
  );
}

export default PromosContenido;
