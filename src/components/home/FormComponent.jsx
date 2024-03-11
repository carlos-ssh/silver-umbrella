import styled from '@emotion/styled'

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

export const FormComponent = ({
    handleInputChange,
    selectedPlace,
    city
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
