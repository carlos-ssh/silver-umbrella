import Image from 'next/image'
import styled from '@emotion/styled'

const ForecastContainer = styled.div`
    overflow-x: hidden;
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

export const ForecastComponent = ({ days, city }) => {

    return (
        <ForecastContainer>
            <h3>El clima en los siguientes 5 días en { city }</h3>
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
        </ForecastContainer>
    )
}


