import './Sucursales.css';

function Sucursales() {
  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales</h2>

      <div className="lista-sucursales">
        <div className="sucursal">
          <img
            src="https://tipsparatuviaje.com/wp-content/uploads/2018/10/headquarter-tienda.jpg"
            alt="Sucursal Centro"
          />
          <h3>Sucursal Centro</h3>
          <p>Av. Principal #123</p>
        </div>

        <div className="sucursal">
          <img
            src="https://www.martinproyectos.com/wp-content/uploads/2023/02/tendencias-interiorismo-que-perduran.jpg"
            alt="Sucursal Norte"
          />
          <h3>Sucursal Norte</h3>
          <p>Calle Comercial #456</p>
        </div>

        <div className="sucursal">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80"
            alt="Sucursal Sur"
          />
          <h3>Sucursal Sur</h3>
          <p>Av. del Mercado #789</p>
        </div>

        <div className="sucursal">
          <img
            src="https://cdn2.telediario.mx/uploads/media/2024/10/16/lavoro-famosa-tienda-ropa-monterrey-1.jpg"
            alt="Sucursal Este"
          />
          <h3>Sucursal Este</h3>
          <p>Boulevard Central #321</p>
        </div>
      </div>
    </section>
  );
}

export default Sucursales;
