import Mapa from "./Mapa";
import "./Sucursales.css";

function Sucursales() {
  const sedes = [
    {
      id: 1,
      ciudad: "Xicotepec Centro",
      direccion: "Calle Hidalgo 123, Col. Centro, Xicotepec, Puebla",
      tel: "+52 782 000 0001",
      mapa: "https://maps.google.com",
      lat: 20.27657415896826,
      lng: -97.9642692798461,
      nombre: "Sucursal Centro",
    },
    {
      id: 2,
      ciudad: "Xicotepec Norte",
      direccion: "Av. 20 de Noviembre 456, Col. Obrera, Xicotepec, Puebla",
      tel: "+52 782 000 0002",
      mapa: "https://maps.google.com",
      lat: 20.276191177580813,
      lng: -97.95967610900618,
      nombre: "Sucursal Norte",
    },
    {
      id: 3,
      ciudad: "Xicotepec Sur",
      direccion: "Calle 16 de Septiembre 789, Col. Centro, Xicotepec, Puebla",
      tel: "+52 782 000 0003",
      mapa: "https://maps.google.com",
      lat: 20.275604735498444,
      lng: -97.96429479746189,
      nombre: "Sucursal Sur",
    },
    {
      id: 4,
      ciudad: "Xicotepec Este",
      direccion: "Boulevard Benito Juarez 321, Col. Centro, Xicotepec, Puebla",
      tel: "+52 782 000 0004",
      mapa: "https://maps.google.com",
      lat: 20.275640456995326,
      lng: -97.95872224112566,
      nombre: "Sucursal Este",
    },
  ];

  return (
    <div className="classSuc">
      <h2>Nuestras Sedes</h2>
      <div className="classSedes">
        {sedes.map((sede) => (
          <address key={sede.id}>
            <h3>{sede.ciudad}</h3>
            <p>Direccion: {sede.direccion}</p>
            <p>
              Telefono: <strong>{sede.tel}</strong>
            </p>
            <Mapa lat={sede.lat} lng={sede.lng} nombre_sucursal={sede.nombre} />
          </address>
        ))}
      </div>
    </div>
  );
}

export default Sucursales;
