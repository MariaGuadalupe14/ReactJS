import { useState } from "react";
import "./Galeria.css";

function Galeria() {
  const imagenes = [
    "https://m.media-amazon.com/images/I/61576rR4yTL._AC_SY741_.jpg",
    "https://m.media-amazon.com/images/I/717MwWkSy9L._AC_SX569_.jpg",
    "https://m.media-amazon.com/images/I/71fE5eFYo4L._AC_SX679_.jpg",
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  function irAnterior() {
    setIndiceActual((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  }

  function irSiguiente() {
    setIndiceActual((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="galeria">
      <h2>Galeria</h2>

      <div className="carrusel-galeria">
        <button className="btn-carrusel" onClick={irAnterior}>
          {"<"}
        </button>

        <img
          src={imagenes[indiceActual]}
          alt={`Imagen ${indiceActual + 1} de galeria`}
          className="imagen-carrusel"
        />

        <button className="btn-carrusel" onClick={irSiguiente}>
          {">"}
        </button>
      </div>

      <div className="indicadores-galeria">
        {imagenes.map((_, index) => (
          <button
            key={index}
            className={`indicador ${index === indiceActual ? "activo" : ""}`}
            onClick={() => setIndiceActual(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Galeria;
