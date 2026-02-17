import { useJsApiLoader, Marker, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '260px',
};

function Mapa({ lat, lng, nombre_sucursal }) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div className="mapa-estado">Error al cargar el mapa</div>;
  if (!isLoaded) return <div className="mapa-estado">Cargando mapa...</div>;

  const center = { lat, lng };

  return (
    <div className="mapa-contenedor">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} title={nombre_sucursal} />
      </GoogleMap>
    </div>
  );
}

export default Mapa;
