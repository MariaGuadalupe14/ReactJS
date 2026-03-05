import { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import AdvancedMarker from './AdvancedMarker';

const containerStyle = {
    width: '100%',
    height: '350px'
};

function MapaGeolocalizacion(){
    const [ubicacion, setUbicacion] = useState(null);
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ['marker'],
    });

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUbicacion({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            },
            (error)=> console.error(error),
            {enableHighAccuracy:true}
        )
    },[])

    if (loadError) return <div className="mapa-estado">Error al cargar el mapa</div>;
    if (!isLoaded) return <div className="mapa-estado">Cargando mapa...</div>;
    if (!ubicacion) return <div className="mapa-estado">Obteniendo tu ubicacion...</div>;

    return(
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={ubicacion}
            zoom={15}
            options={{ mapId: import.meta.env.VITE_GOOGLE_MAP_ID || 'DEMO_MAP_ID' }}
        >
            <AdvancedMarker position={ubicacion} />
        </GoogleMap>
    )
}

export default MapaGeolocalizacion
