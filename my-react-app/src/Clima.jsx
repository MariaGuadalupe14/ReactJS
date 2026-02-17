// 20.278673257056912, -97.96470248658306
import{ useEffect, useState } from "react";

function Clima() {
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.278673257056912;
    const lng = -97.96470248658306;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then ((res) => res.json())
        .then ((data) => {
            console.log(data);
            setClima(data);
        })
        .catch((error) => console.error('Error al obtener el clima:', error));
       }, [])

    return (
       <div className="divClima">
        {
            clima ? (
                <>
                <p>{clima.name} Temp: {clima.main.temp}°C Hum: {clima.main.humidity}%</p>
                <p>Descripcion: {clima.weather?.[0]?.description}</p>
                </>
            ) : (
                <p>Cargando clima...</p>
            )
        }
       </div> 
    )

}

export default Clima;

