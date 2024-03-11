'use client'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { useWeather } from '@/hooks/useWeather'
import { useForecast } from '@/hooks/useForecast'
import { useBackgroundImage } from '@/hooks/useBackgroundImage'
import { SearchComponent } from './SearchComponent'
import { WeatherComponent } from './WeatherComponent'
import { ForecastComponent } from './ForecastComponent'

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

const ErrorContainer = styled.div`
    color: red;
    text-align: center;
`

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    color: #000;
`

export const IndexComponent = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null })
    const [error, setError] = useState('')
    const [isContainerVisible, setIsContainerVisible] = useState('')

    const appId = process.env.NEXT_PUBLIC_OPENWEATHER_APP_ID;
    const clientId = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

    const { weather, city } = useWeather(location, appId)
    const { forecast, days } = useForecast(location, appId)
    const { backgroundImageUrl, fetchBackgroundImage } = useBackgroundImage()

    useEffect(() => {
        const success = (position) => {
            const latitude = position.latitude
            const longitude = position.longitude
            setLocation({ latitude, longitude })
        }

        const error = () => {
            console.error("Unable to retrieve your location")
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        } else {
            console.log("Geolocation is not supported by your browser")
        }
    }, [])

    useEffect(() => {
        const query = weather?.name || city;
        if (query) {
            fetchBackgroundImage(query, clientId);
        }
    }, [
        weather,
        clientId,
        fetchBackgroundImage,
        city
    ])

    return (
        <div>
            <MainContainer>
                {error && <ErrorContainer>Error: {error}</ErrorContainer>}
                <SearchComponent
                    isContainerVisible={isContainerVisible}
                    setError={setError}
                    setIsContainerVisible={setIsContainerVisible}
                    setLocation={setLocation}
                />
                {weather && (
                    <WeatherComponent
                        weather={weather}
                        city={weather.name}
                        backgroundImageUrl={backgroundImageUrl}
                    />
                )}
            </MainContainer>
            {forecast && (
                <DaysContainer>
                    <ForecastComponent
                        forecast={forecast}
                        days={days}
                        city={weather.name}
                    />
                </DaysContainer>
            )}
        </div>
    );
};
