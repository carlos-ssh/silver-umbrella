'use client';
import { HomePage } from './home/HomePage'
import styled from '@emotion/styled'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`


export default function Home() {
  return (
    <Main>
      <HomePage />
    </Main>
  );
}
