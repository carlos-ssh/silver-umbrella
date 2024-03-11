import { useState, useEffect, useCallback } from 'react';

export const useForecast = (location, appId) => {
    const [forecast, setForecast] = useState(null);
    const [days, setDays] = useState([]);

    const organizeForecastByDay = (forecastList) => {
        let days = {};
        let addedDays = 0;

        forecastList.forEach((forecast) => {
            if (addedDays >= 5) {
                return;
            }

            const date = new Date(forecast.dt_txt).toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' });

            if (!days[date]) {
                addedDays++;
                days[date] = [];
            }

            days[date].push(forecast);
        });

        setDays(days);
        return days;
    };

    const fetchForecast = useCallback(() => {
        if (location?.latitude && location?.longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${appId}&lang=es`)
                .then(response => response.json())
                .then(data => {
                    const forecastByDay = organizeForecastByDay(data.list);
                    setForecast(forecastByDay);
                })
                .catch(error => console.error("Failed to fetch forecast data:", error));
        }
    }, [location, appId]);

    useEffect(() => {
        fetchForecast();
    }, [fetchForecast]);

    return { forecast, days };
};
