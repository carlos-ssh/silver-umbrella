import styled from '@emotion/styled'

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

export const ResultsComponent = ({
    isContainerVisible,
    nameList,
    handleSelectPlace,
    isLoading
}) => {
    return (
        <ResultsContainer>
            {isContainerVisible && (
                <Container>
                    {isLoading ? (
                        <div>Cargando...</div>
                    ) : (
                        nameList.length > 0 ? (
                            nameList.map((place, index) => (
                                <EachResult key={index} onClick={() => handleSelectPlace(place)}>
                                    <Result>
                                        <span>{place.display}</span>
                                        {' '} - {' '}
                                        <span>{place.state}</span>
                                    </Result>
                                </EachResult>
                            ))
                        ) : (
                            <div>No hay resultados</div>
                        )
                    )}
                </Container>
            )}
        </ResultsContainer>
    )
}