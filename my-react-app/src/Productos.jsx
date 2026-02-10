import './Productos.css';

function Productos() {
  return (
    <section className="productos">
      <h2>Nuestros Productos</h2>

      <div className="grid-productos">
        <div className="card-producto">
          <img src="https://m.media-amazon.com/images/I/51sGTVkkShL._AC_UL480_FMwebp_QL65_.jpg" />
          <h3>Playera Casual</h3>
          <p>Algodón premium, varios colores.</p>
          <span>$299 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="card-producto">
          <img src="https://m.media-amazon.com/images/I/71egm8s4SaL._AC_UL480_FMwebp_QL65_.jpg" />
          <h3>Sudadera</h3>
          <p>Ideal para clima frío.</p>
          <span>$499 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="card-producto">
          <img src="https://m.media-amazon.com/images/I/515wpbANaKL._AC_UL480_FMwebp_QL65_.jpg" />
          <h3>Pantalón</h3>
          <p>Corte moderno y cómodo.</p>
          <span>$599 MXN</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  );
}

export default Productos;
