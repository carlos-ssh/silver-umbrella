"use client"
import styled from '@emotion/styled'
import { NavbarComponent } from '@/components/navigation/NavbarComponent'
import { IndexComponent } from '@/components/home/IndexComponent'

const MainContainer = styled.div`
    color: #f9f9f9;
    width: 100%;
`

export const HomePage = () => {
    return (
        <MainContainer>
            <NavbarComponent />
            <IndexComponent />
            HomePage
        </MainContainer>
    )
}
