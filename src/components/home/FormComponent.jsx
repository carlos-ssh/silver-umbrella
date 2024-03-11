import styled from '@emotion/styled'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Input = styled.input`
    width: 50%;
    padding: 10px 7px;
    border: none;
    border-radius: 10px;
    margin: auto;
`

export const FormComponent = ({
    handleInputChange,
    selectedPlace
}) => {
    return (
        <FormContainer>
            <Input
                type="text"
                placeholder="Buscar un ciudad..."
                onChange={handleInputChange}
                value={selectedPlace}
            />
        </FormContainer>
    )
}
