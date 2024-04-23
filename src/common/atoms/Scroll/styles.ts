import styled from "styled-components";

export const ScrollContainer = styled.div`
  font-size: ${({ theme }) => theme.size.size3rem};
  color: ${({ theme }) => theme.color.violetBlue};

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size2rem};
  }
`;
