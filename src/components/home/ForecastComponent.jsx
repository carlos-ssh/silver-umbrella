import Image from 'next/image'
import styled from '@emotion/styled'

const ForecastContainer = styled.div`
    overflow-x: hidden;
    width: 100%;
`

const TitleDays = styled.h3`
    text-align: center;

    @media (max-width: 768px) {
        width: 60%;
        margin: 20px auto 10px auto;
    }
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    background-color: #cdc3c3;
    border-radius: 10px;
    margin: 10px;
    color: #333;
    cursor: pointer;
    min-width: 220px;
    padding: 10px;

    @media (max-width: 768px) {
        min-width: 220px;
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

const WeatherCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0.1;
`

const TextContainer = styled.div`
    line-height: 0.1;
    text-align: center;
`

export const ForecastComponent = ({ days, city }) => {

    return (
        <ForecastContainer>
            <TitleDays>El clima en los siguientes 5 días en { city }</TitleDays>
            { days ? (
                    <CardsContainer>
                        {Object.keys(days).map((day, index) => (
                            <Card key={index}>
                                <TextDay>{day}</TextDay>
                                <WeatherCardContainer>
                                    <Image
                                        src={`http://openweathermap.org/img/wn/${days[day][0].weather[0].icon}.png`}
                                        alt="Weather icon"
                                        width={90}
                                        height={90}
                                    />
                                    <TextContainer>
                                        <h1>{`${Math.round(days[day][0].main.temp)}°C`}</h1>
                                        <h5>{days[day][0].weather[0].description}</h5>
                                    </TextContainer>
                                </WeatherCardContainer>
                                <MinMaxTextContainer>
                                    <MinMaxText>{`Min: ${Math.round(days[day][0].main.temp_min)}°C`}</MinMaxText>
                                    <MinMaxText>{`Max: ${Math.round(days[day][0].main.temp_max)}°C`}</MinMaxText>
                                </MinMaxTextContainer>
                            </Card>
                        ))}
                    </CardsContainer>
                ) : (<p>Cargando datos del clima...</p>)}
        </ForecastContainer>
    )
}


