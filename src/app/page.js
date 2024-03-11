'use client';
import { HomePage } from './home/HomePage'
import styled from '@emotion/styled'
import './globals.css'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export default function Home() {
  return (
    <Main>
      <HomePage />
    </Main>
  );
}
