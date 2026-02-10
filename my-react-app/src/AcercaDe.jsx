import "./AcercaDe.css";

function AcercaDe() {
    return (
        <section className="acercaDeDiv">
            <header className="acercaDeHero">
                <p className="acercaDeEtiqueta">Sobre la tienda</p>
                <h2>Acerca de Nosotros</h2>
                <p className="acercaDeLead">
                    Somos una tienda de ropa que combina estilo actual, calidad y precios justos para vestir tu dia a dia.
                </p>
            </header>

            <div className="acercaDeGrid">
                <article className="acercaDeCard">
                    <h3>Mision</h3>
                    <p>
                        Ofrecer prendas versatiles y duraderas que reflejen tu estilo y te hagan sentir comodo.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Vision</h3>
                    <p>
                        Ser tu primera opcion en moda cotidiana, con colecciones frescas y una experiencia simple.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Valores</h3>
                    <ul>
                        <li>Calidad en cada prenda.</li>
                        <li>Atencion cercana.</li>
                        <li>Estilo accesible.</li>
                        <li>Responsabilidad en procesos.</li>
                    </ul>
                </article>
            </div>

            <div className="acercaDeGrid secundaria">
                <article className="acercaDeCard">
                    <h3>Lo que nos inspira</h3>
                    <p>
                        La moda que se adapta a tu rutina: basicos, tendencias y piezas clave que combinan facil.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Colecciones</h3>
                    <p>
                        Renuevo constante de prendas para mujer, hombre y unisex con tallas inclusivas.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Equipo</h3>
                    <p>
                        Un equipo apasionado por la moda que selecciona cada pieza pensando en ti.
                    </p>
                </article>
            </div>
        </section>
    );
}
export default AcercaDe;
