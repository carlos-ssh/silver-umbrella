import styled from '@emotion/styled'

const Title = styled.div`
  font-size: 22px;
`

export const WeatherOutfitComponent = ({ days, city }) => {
  console.log(days)
  // console.log(forecast.main)
  return (
    <div>
      <Title>Sugerencias de Outfit para { city }</Title>
      { days ? (
                    <div>
                        {Object.keys(days).map((day, index) => (
                            <div key={index}>
                                <div>{day}</div>
                                <div>
                                    <div>
                                        <h1>{`${Math.round(days[day][0].main.temp)}°C`}</h1>
                                        <h5>{days[day][0].weather[0].description}</h5>
                                    </div>
                                </div>
                                <div>
                                    <div>{`Min: ${Math.round(days[day][0].main.temp_min)}°C`}</div>
                                    <div>{`Max: ${Math.round(days[day][0].main.temp_max)}°C`}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (<p>Cargando datos del clima...</p>)}
    </div>
  )
}
