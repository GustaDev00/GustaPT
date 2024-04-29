import styled from "styled-components";

export const TitleFormsContainer = styled.h2`
  font-size: ${({ theme }) => theme.size.size12rem};
  color: ${({ theme }) => theme.color.cultured};
  text-transform: uppercase;
  line-height: 4rem;

  div {
    display: flex;
    align-items: center;

    span {
      content: "";
      display: block;
      width: 8rem;
      height: 8rem;
      border-radius: 10rem;
      background-color: ${({ theme }) => theme.color.cornflowerBlue};
    }
  }

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size8rem};
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size4_8rem};
    line-height: 2rem;

    div {
      span {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
