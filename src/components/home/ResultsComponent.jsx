import styled from '@emotion/styled'

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-height: 90%;
    margin-top: 100px;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 50;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #f4f4f4;
    color: #333;
    border-radius: 10px;
    max-height: 500px;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid #e1e0e0;

    &::-webkit-scrollbar {
        display: none;
    }
`

const EachResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    background-color: transparent;
    width: 100%;

    &:hover {
        background-color: #cbcbcb;
        width: 100%;
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
