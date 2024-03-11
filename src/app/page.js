'use client';
import { HomePage } from './home/HomePage'
import styled from '@emotion/styled'
import './globals.css'
import FooterComponent from '@/components/navigation/FooterComponent'

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`

export default function Home() {
  return (
    <Main>
      <HomePage />
      <FooterComponent />
    </Main>
  );
}
