import styled, { keyframes } from "styled-components";

const Up = keyframes`
  0% {
    transform: translate3d(0, calc(-25% + 1rem), 0);
  }

  100% {
    transform: translate3d(0, calc(-50% + 1rem), 0);
  }
`;

const Down = keyframes`
  0% {
    transform: translate3d(0, calc(-50% + 1rem), 0);
  }

  100% {
    transform: translate3d(0, calc(-25% + 1rem), 0);
  }
`;

export const BackgroundContainer = styled.div`
  margin: 7rem 0 0 7rem;
  display: flex;
  gap: 5.5rem;
`;

export const Circle = styled.div`
  background-color: ${({ theme }) => theme.color.gunmetal};
  opacity: 0.1;
  width: 40rem;
  height: 40rem;
  border-radius: 50rem;
`;

export const Rectangle = styled(Circle)`
  height: 80rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  position: relative;

  &:first-child,
  &:last-child {
    animation: ${Up} 60s linear infinite;
    animation-timing-function: linear;
    animation-delay: 1s;
  }
  &:last-child {
    animation-duration: 150s;
  }

  &:nth-child(2) {
    animation: ${Down} 60s linear infinite;
    animation-timing-function: linear;
    animation-delay: 1s;
  }
`;
