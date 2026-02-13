import Mapa from './Mapa';
import './Sucursales.css';

function Sucursales() {
  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales</h2>
      <div className="lista-sucursales">
        <Mapa
          lat={20.27657415896826}
          lng={-97.9642692798461}
          nombre_sucursal={'Sucursal Centro'}
          direccion={'Calle Hidalgo 123, Col. Centro, Poza Rica, Veracruz'}
        />
        <Mapa
          lat={20.276191177580813}
          lng={-97.95967610900618}
          nombre_sucursal={'Sucursal Norte'}
          direccion={'Av. 20 de Noviembre 456, Col. Obrera, Poza Rica, Veracruz'}
        />
        <Mapa
          lat={20.275604735498444}
          lng={-97.96429479746189}
          nombre_sucursal={'Sucursal Sur'}
          direccion={'Calle 16 de Septiembre 789, Col. Petromex, Poza Rica, Veracruz'}
        />
        <Mapa
          lat={20.275640456995326}
          lng={-97.95872224112566}
          nombre_sucursal={'Sucursal Este'}
          direccion={'Boulevard Adolfo Ruiz Cortines 321, Col. Tajin, Poza Rica, Veracruz'}
        />
      </div>
    </section>
  );
}

export default Sucursales;
