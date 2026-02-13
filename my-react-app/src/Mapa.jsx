import { useJsApiLoader, Marker, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '260px',
};

function Mapa({ lat, lng, nombre_sucursal, direccion }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div className="sucursal">Error al cargar el mapa</div>;
  if (!isLoaded) return <div className="sucursal">Cargando mapa...</div>;

  const center = { lat, lng };

  return (
    <article className="sucursal">
      <h3>{nombre_sucursal}</h3>
      {direccion && <p className="direccion">{direccion}</p>}
      <div className="mapa-contenedor">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </article>
  );
}

export default Mapa;
