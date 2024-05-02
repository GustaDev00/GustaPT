import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.size.size3rem};
  color: inherit;
  position: relative;
  height: 4rem;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size2rem};
  }
`;

export const Count = styled.div`
  position: relative;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
