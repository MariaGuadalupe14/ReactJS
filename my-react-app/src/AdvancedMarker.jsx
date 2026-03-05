import { useEffect } from 'react';
import { useGoogleMap } from '@react-google-maps/api';

function AdvancedMarker({ position, title }) {
  const map = useGoogleMap();

  useEffect(() => {
    if (!map || !window.google?.maps?.marker?.AdvancedMarkerElement || !position) {
      return undefined;
    }

    const marker = new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position,
      title,
    });

    return () => {
      marker.map = null;
    };
  }, [map, position, title]);

  return null;
}

export default AdvancedMarker;
