import { useState, useEffect } from 'react';
import Image from 'next/image'
import styled from '@emotion/styled'

const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const MainContainer = styled.div`
    width: 100%;
    background-color: #d4d4d4;
    opacity: 0.9;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 15px 10px;
    z-index: -10;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
`

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    max-height: 500px;
    z-index: 10;
    position: relative;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #f9f9f9;
    color: #333;
    width: 100%;
    border-radius: 10px;
    max-height: 500px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    z-index: 1000;

    &::-webkit-scrollbar {
        display: none;
    }
`

const EachResult = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #cbcbcb;
    }

    &:active {
        background-color: #acacac;
    }
`

const Result = styled.p`
    width: 100%;
    text-decoration: none;
    color: #333;
`

const ErrorContainer = styled.div`
    color: red;
    text-align: center;

`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;

`

const WeatherContainer = styled.div`
    display: flex;
    width: 100%;
    background-image: url(${props => props.backgroundImageUrl});
    background-size: cover;
    background-position: center;
    color: #fff;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    color: #000;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    margin: 0 auto;

    @media (max-width: 768px) {
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`

const Card = styled.div`
    width: 100%;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin: 0 10px;
    color: #333;
    cursor: pointer;

    @media (max-width: 768px) {
        min-width: 180px;
    }

    &:hover {
        background-color: #cbcbcb;
    }

    &:active {
        background-color: #acacac;
    }

`

const TextDay = styled.h6`
    text-align: center;
`

const MinMaxTextContainer = styled.div`
    display: flex;
    justify-items: space-between;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: 100%;
`

const MinMaxText = styled.p`
    font-size: 12px;
    text-align: center;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`

export const IndexComponent = () => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
    const [isContainerVisible, setIsContainerVisible] = useState(false);
    const [nameList, setNameList] = useState([])
    const [selectedPlace, setSelectedPlace] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')
    const [days, setDays] = useState(null)
    const appId = process.env.NEXT_PUBLIC_OPENWEATHER_APP_ID
    const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            }, (error) => {
                console.error("Error Code = " + error.code + " - " + error.message);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    // One Day
    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${appId}`)
                .then(response => response.json())
                .then(data => {
                    setWeather(data)
                    setCity({city: data.name})
                    console.log(data)
                })
        }
    }, [location, appId])

    // Five Days
    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${appId}&lang=es`)
                .then(response => response.json())
                .then(data => {
                    const forecastByDay = organizeForecastByDay(data.list);
                    console.log(forecastByDay);
                })
        }
    }, [location, appId])

    //Unsplash
    useEffect(() => {
        if (city) {
            fetch(`https://api.unsplash.com/search/photos?query=${weather.name || city}&lang=es&client_id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                if (data.results.length > 0) {
                    const imageUrl = data.results[0].urls.regular;
                    setBackgroundImageUrl(imageUrl);
                }
            })
            .catch(error => console.log(error));
        }
    }, [city, weather, clientId]);

    const searchPlaces = debounce(async (place) => {
        if (!place.trim()) return
        setIsLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${place}`)
            if (!response.ok) throw new Error('No se pudo obtener los datos')
            const data = await response.json()
            setNameList(data)
        } catch (error) {
            setError(error.message)
            setNameList([])
        } finally {
            setIsLoading(false)
        }
    }, 500)

    const handleInputChange = (event) => {
        const { value } = event.target
        if (value.trim() === '') {
            setNameList([])
            setSelectedPlace(null)

            return;
        }
        setIsContainerVisible(true)
        setSelectedPlace(value)
        searchPlaces(value)
    }

    const handleSelectPlace = (place) => {
        setLocation({
            latitude: place.lat,
            longitude: place.long
        })

        setIsContainerVisible(false);
    }

    const organizeForecastByDay = (forecastList) => {
        const days = {}

        forecastList.forEach((forecast) => {
            const date = new Date(forecast.dt_txt).toLocaleDateString('es-ES', { weekday: 'long', month: 'long', day: 'numeric' })

            if (!days[date]) {
                days[date] = []
            }

            days[date].push(forecast)
        })

        console.log(days)
        setDays(days)
        return days;
    }

    return (
        <div>
            <MainContainer>
                {error && <ErrorContainer>Error: {error}</ErrorContainer>}
                <SearchContainer>
                    <FormContainer>
                        <Input
                            type="text"
                            placeholder="Buscar un ciudad..."
                            onChange={handleInputChange}
                            value={selectedPlace}
                        />
                    </FormContainer>

                    <ResultsContainer>
                        {isContainerVisible && (
                            <Container>
                                {isLoading ? (
                                    <div>Cargando...</div>
                                ) : (
                                    nameList.length > 0 ? (
                                        nameList.map((place, index) => (
                                            <EachResult key={index} onClick={() => handleSelectPlace(place)}>
                                                {/* <Link href="#" style={{textDecoration: 'none'}}> */}
                                                    <Result>
                                                        <span>{place.display}</span>
                                                        {' '} - {' '}
                                                        <span>{place.state}</span>
                                                    </Result>
                                                {/* </Link> */}
                                            </EachResult>
                                        ))
                                    ) : (
                                        <div>No hay resultados</div>
                                    )
                                )}
                            </Container>
                        )}
                    </ResultsContainer>
                </SearchContainer>
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
            </MainContainer>
            <DaysContainer>
                { days ? (
                    <CardsContainer>
                        {Object.keys(days).map((day, index) => (
                            <Card key={index}>
                                <TextDay>{day}</TextDay>
                                <Image
                                    src={`http://openweathermap.org/img/wn/${days[day][0].weather[0].icon}.png`}
                                    alt="Weather icon"
                                    width={70}
                                    height={70}
                                    />
                                <h1>{`${days[day][0].main.temp}°C`}</h1>
                                <h5>{days[day][0].weather[0].description}</h5>
                                <MinMaxTextContainer>
                                    <MinMaxText>{`Min: ${days[day][0].main.temp_min}°C`}</MinMaxText>
                                    <MinMaxText>{`Max: ${days[day][0].main.temp_max}°C`}</MinMaxText>
                                </MinMaxTextContainer>
                            </Card>
                        ))}
                    </CardsContainer>
                ) : (<p>Cargando datos del clima...</p>)}
            </DaysContainer>
        </div>
    )
}
