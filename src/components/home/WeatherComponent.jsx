import styled from '@emotion/styled'
import { Spinner } from '../navigation/SpinnerComponent';

const WeatherContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 53%;
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

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;

const DisplayWeather = styled.div`
    text-align: center;
    line-height: 0.5;
`
const DegreesText = styled.h1`
    font-size: 3.5em;
`

const MainWeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0.1;
`

const DataWeather = styled.div`
    line-height: 0.1;
`

const WeatherDescription = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-items: space-around;
    gap: 10px;
`

const MinMaxContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
`

const MinContainer = styled.div`
    font-size: 20px;
    line-height: 0.1;
`

const MaxContainer = styled.div`
    font-size: 20px;
    line-height: 0.1;
`

export const WeatherComponent = ({ weather, city, backgroundImageUrl }) => {
    return (
        <WeatherContainer backgroundImageUrl={ backgroundImageUrl }>
            {weather ? (
                <div>
                    <DisplayWeather>
                        <MainWeatherContainer>
                            <DegreesText>{`${ Math.round(weather.main.temp) }°C`}</DegreesText>
                            <DataWeather>
                                <h2>{ weather.name || city }</h2>
                                <p>{`${ weather.weather[0].description }`}</p>
                            </DataWeather>
                        </MainWeatherContainer>
                        <MinMaxContainer>
                            <MinContainer>
                                <p>{ `${Math.round(weather.main.temp_min)} °C` }</p>
                                <p>Min</p>
                            </MinContainer>
                            <MaxContainer>
                                <p>{ `${Math.round(weather.main.temp_max)} °C` }</p>
                                <p>Max</p>
                            </MaxContainer>
                        </MinMaxContainer>
                    </DisplayWeather>
                    <WeatherDescription>
                        <p>{`Humedad: ${ weather.main.humidity }%`}</p>
                        <p>{`Viento: ${ weather.wind.speed } m/s`}</p>
                    </WeatherDescription>
                </div>
            ) : (
                <Spinner />
            )}
        </WeatherContainer>
    );
};
