import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #d4d2d2;
    padding: 10px 0;
    margin-bottom: 10px;
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
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <FormContainer>
            <Input
                type="text"
                placeholder="Buscar un ciudad..."
                onChange={handleInputChange}
                value={selectedPlace}
                ref={inputRef}
            />
        </FormContainer>
    )
}
