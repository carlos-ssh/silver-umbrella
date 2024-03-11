import styled from '@emotion/styled'
import { Spinner } from '../navigation/SpinnerComponent';

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

const MinMaxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-items: space-between;
`

export const WeatherComponent = ({ weather, city, backgroundImageUrl }) => {
    return (
        <WeatherContainer backgroundImageUrl={backgroundImageUrl}>
            {weather ? (
                <div>
                    <DisplayWeather>
                        <h2>{weather.name || city}</h2>
                        <DegreesText>{`${weather.main.temp}°C`}</DegreesText>
                        <p>{`${weather.weather[0].description}`}</p>
                        <MinMaxContainer>
                            <p>{`Min ${weather.main.temp_min}`}</p>
                            <p>{`Max ${weather.main.temp_max}`}</p>
                        </MinMaxContainer>
                    </DisplayWeather>
                    <WeatherDescription>
                        <p>{`Humedad: ${weather.main.humidity}%`}</p>
                        <p>{`Viento: ${weather.wind.speed} m/s`}</p>
                    </WeatherDescription>
                </div>
            ) : (
                <Spinner />
            )}
        </WeatherContainer>
    );
};
