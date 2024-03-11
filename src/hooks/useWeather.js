import { useState, useEffect } from 'react';

export const useWeather = (location, appId) => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        if (location?.latitude && location?.longitude) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${appId}`)
            .then(response => response.json())
            .then(data => {
            setWeather(data);
            setCity({city: data.name});
            })
            .catch(error => console.error("Failed to fetch weather data:", error));
        }
    }, [location, appId]);

    return { weather, city };
};


