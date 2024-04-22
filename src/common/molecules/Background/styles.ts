import styled from "styled-components";

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
`;
