import { useState } from 'react'
import styled from '@emotion/styled'
import { FormComponent } from './FormComponent'
import { ResultsComponent } from './ResultsComponent'

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;

`

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
}

export const SearchComponent = ({
    isContainerVisible,
    setError,
    setIsContainerVisible,
    setLocation,
    city
}) => {
    const [nameList, setNameList] = useState([])
    const [selectedPlace, setSelectedPlace] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (event) => {
        const { value } = event.target

        if (value.trim() === '') {
            setNameList([])
            setSelectedPlace('')

            return;
        }

        setIsContainerVisible(true)
        setSelectedPlace(value)
        searchPlaces(value)
    }

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

    const handleSelectPlace = (place) => {
        setLocation({
            latitude: place.lat,
            longitude: place.long
        })
        setSelectedPlace(place.city_name)
        setIsContainerVisible(false);
    }

    return (
        <SearchContainer>
            <FormComponent
                handleInputChange={handleInputChange}
                selectedPlace={selectedPlace}
                city={city}
            />
            <ResultsComponent
                isContainerVisible={isContainerVisible}
                isLoading={isLoading}
                nameList={nameList}
                handleSelectPlace={handleSelectPlace}
            />

        </SearchContainer>
    )
}


