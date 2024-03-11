import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;


export const Spinner = styled.div`
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-left-color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${rotate} 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
