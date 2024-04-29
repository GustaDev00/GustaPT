import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.size12rem};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.majorelleBlue};
  position: relative;
  width: fit-content;
  z-index: 1;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 28%;
    width: 90%;
    height: 4rem;
    background-color: ${({ theme }) => theme.color.cornflowerBlue};
    border-radius: 10rem;
    z-index: -1;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size4_8rem};
    width: 100%;

    &::after {
      height: 1rem;
      top: 50%;
    }
  }
`;
