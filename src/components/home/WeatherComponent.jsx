import styled from '@emotion/styled'

const WeatherContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 90%;
    margin: 0 auto;
    width: 100%;
    background-image: url(${(props) => props.backgroundImageUrl});
    background-size: cover;
    background-position: center;
    color: #fff;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
    }


    > div {
        position: relative;
        z-index: 1;
    }
`;

const DisplayWeather = styled.div`
    text-align: center;
    line-height: 0.5;
`
const DegreesText = styled.h1`
    font-size: 3.5em;
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-items: space-around;
    gap: 10px;
`
export const WeatherComponent = ({ weather, city, backgroundImageUrl }) => {
    return (
        <WeatherContainer backgroundImageUrl={backgroundImageUrl}>
            {weather ? (
                <div>
                    <DisplayWeather>
                        <DegreesText>{`${weather.main.temp}°C`}</DegreesText>
                        <h2>{weather.name || city}</h2>
                        <p>{`${weather.weather[0].description}`}</p>
                    </DisplayWeather>
                    <WeatherDescription>
                        <p>{`Humedad: ${weather.main.humidity}%`}</p>
                        <p>{`Viento: ${weather.wind.speed} m/s`}</p>
                    </WeatherDescription>
                </div>
            ) : (
                <p>Cargando datos del clima...</p>
            )}
        </WeatherContainer>
    );
};
