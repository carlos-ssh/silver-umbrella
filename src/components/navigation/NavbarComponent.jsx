import Link from 'next/link'
import { css } from '@emotion/react';
import styled from '@emotion/styled'

const NavbarContainer = styled.div`
    background-color: #000;
    color: #f9f9f9;
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    padding-left: 15px;
`

const NavTitleLink = styled.a`
    color: #f9f9f9;
    text-decoration: none;
    margin-right: 15px;
`

export const NavbarComponent = () => {
    return (
        <NavbarContainer>
            <Link href='/' passHref legacyBehavior>
                <NavTitleLink>Reservamos</NavTitleLink>
            </Link>
        </NavbarContainer>
    )
}
