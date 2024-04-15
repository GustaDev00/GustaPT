import styled, { keyframes } from "styled-components";

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
  position: fixed;
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

  @media (max-width: 600px) {
    width: 29rem;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.size.size6rem};
  color: ${({ theme }) => theme.color.cultured};
  text-transform: uppercase;
  display: none;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size3rem};
  }

  &:first-child {
    display: block;
  }

  &:last-child {
    position: relative;
    animation: ${blinkAnimation} 1s infinite;
    bottom: 0.2rem;
    display: block;
  }
`;
