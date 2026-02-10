import './Sucursales.css';

function Sucursales() {
  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales</h2>

      <div className="lista-sucursales">
        <div className="sucursal">
          <img src="https://tipsparatuviaje.com/wp-content/uploads/2018/10/headquarter-tienda.jpg" />
          <h3>Sucursal Centro</h3>
          <p>Av. Principal #123</p>
        </div>

        <div className="sucursal">
          <img src="https://www.martinproyectos.com/wp-content/uploads/2023/02/tendencias-interiorismo-que-perduran.jpg" />
          <h3>Sucursal Norte</h3>
          <p>Calle Comercial #456</p>
        </div>
      </div>
    </section>
  );
}

export default Sucursales;
