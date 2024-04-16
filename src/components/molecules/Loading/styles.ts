import styled, { keyframes } from "styled-components";

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
`;

export const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingContainer = styled.section`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gunmetal};
`;

export const Content = styled.article`
  display: flex;
  width: 57rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 600px) {
    width: 29rem;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.size.size6rem};
  color: ${({ theme }) => theme.color.cultured};
  text-transform: uppercase;
  display: none;
  opacity: 0;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size3rem};
  }

  &:first-child {
    display: block;
    opacity: 1;
  }

  &:last-child {
    position: relative;
    animation: ${blinkAnimation} 1s infinite;
    bottom: 0.2rem;
    display: block;
  }
`;

export const SquaresContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  width: 110vw;
  z-index: 2;
`;

export const Squares = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.cultured};
  opacity: 0;
`;
