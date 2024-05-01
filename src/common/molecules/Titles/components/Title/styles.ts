import styled from "styled-components";

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.size12rem};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.violetBlue};
  position: relative;
  width: fit-content;
  z-index: 1;
  display: flex;
  flex-direction: column;
  line-height: ${({ theme }) => theme.size.size12rem};
  padding: 0rem 7rem;

  span {
    margin-left: 10rem;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size4rem};
    line-height: ${({ theme }) => theme.size.size4rem};
    padding: 0rem 5rem;

    span {
      margin-left: 5rem;
    }
  }
`;
