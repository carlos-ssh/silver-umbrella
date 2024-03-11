"use client"
import styled from '@emotion/styled'
import { NavbarComponent } from '@/components/navigation/NavbarComponent'
import { IndexComponent } from '@/components/home/IndexComponent'

const MainContainer = styled.div`
    width: 100%;
`

export const HomePage = () => {
    return (
        <MainContainer>
            <NavbarComponent />
            <IndexComponent />
        </MainContainer>
    )
}
