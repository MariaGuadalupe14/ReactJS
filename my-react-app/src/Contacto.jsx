import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto">
      <h2>Contactanos</h2>

      <form className="form-contacto">
        <input type="text" placeholder="Nombre" />
        <input type="email" placeholder="Correo electronico" />
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;
