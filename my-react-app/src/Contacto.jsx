import './Contacto.css';

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contáctanos</h2>

      <form className="form-contacto">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electrónico" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar mensaje</button>
      </form>

      <div className="info-contacto">
        <p>📍 Ciudad de México</p>
        <p>📞 55 1234 5678</p>
        <p>✉ contacto@mitienda.com</p>
      </div>
    </section>
  );
}

export default Contacto;
