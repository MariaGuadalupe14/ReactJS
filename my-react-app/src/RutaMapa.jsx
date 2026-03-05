import { useEffect, useState } from 'react';
import { GoogleMap, Polyline, useJsApiLoader } from '@react-google-maps/api';
import AdvancedMarker from './AdvancedMarker';

const containerStyle = {
  width: '100%',
  height: '420px',
};

function RutaMapa({ sucursales = [] }) {
  const [ubicacion, setUbicacion] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY || import.meta.env.VITE_API_KEY,
    libraries: ['marker'],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error('No se pudo obtener la ubicacion:', error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const lineOptions = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.85,
    strokeWeight: 2,
    geodesic: true,
  };

  if (loadError) return <div className="mapa-estado">Error al cargar el mapa de rutas</div>;
  if (!isLoaded) return <div className="mapa-estado">Cargando mapa de rutas...</div>;
  if (!ubicacion) return <div className="mapa-estado">Obteniendo tu ubicacion...</div>;

  return (
    <div className="mapa-rutas-contenedor">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ubicacion}
        zoom={14}
        options={{ mapId: import.meta.env.VITE_GOOGLE_MAP_ID || 'DEMO_MAP_ID' }}
      >
        <AdvancedMarker position={ubicacion} title="Tu ubicacion" />

        {sucursales.map((sucursal) => {
          const destino = { lat: sucursal.latitud, lng: sucursal.longitud };
          const key = `${sucursal.nombre}-${sucursal.latitud}-${sucursal.longitud}`;

          return (
            <div key={key}>
              <AdvancedMarker position={destino} title={sucursal.nombre} />
              <Polyline path={[ubicacion, destino]} options={lineOptions} />
            </div>
          );
        })}
      </GoogleMap>
    </div>
  );
}

export default RutaMapa;
