import styled from "styled-components";

export const Section = styled.section<{ className?: string }>`
  height: 100%;
  position: relative;
`;

export const Wrapper = styled(Section)`
  background-color: ${({ theme }) => theme.color.cultured};
  padding: 8rem 7rem;

  @media (max-width: 600px) {
    padding: 4rem 5rem;
  }
`;

export const Float = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const Over = styled.div`
  position: relative;
  top: 100vh;
`;

export const Main = styled.main`
  position: relative;
`;
