import styled from '@emotion/styled'

const WeatherContainer = styled.div`
    display: flex;
    background-image: url(${props => props.backgroundImageUrl});
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

export const WeatherComponent = ({ weather, city, backgroundImageUrl }) => {
    return (
        <WeatherContainer backgroundImageUrl={backgroundImageUrl}>
            {weather ? (
                <div>
                    <h2>Clima en {weather.name || city}</h2>
                    <p>{`Temperatura: ${weather.main.temp}°C`}</p>
                    <p>{`Humedad: ${weather.main.humidity}%`}</p>
                    <p>{`Viento: ${weather.wind.speed} m/s`}</p>
                    <p>{`Descripción: ${weather.weather[0].description}`}</p>
                </div>
            ) : (
                <p>Cargando datos del clima...</p>
            )}
        </WeatherContainer>
    )
}


