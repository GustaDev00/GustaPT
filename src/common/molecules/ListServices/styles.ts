import styled from "styled-components";

export const ListServicesContainer = styled.div`
  padding: 10rem 0;

  @media (max-width: 600px) {
    padding: 5rem 0;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
`;

export const TitleService = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.color.cultured};
  font-size: ${({ theme }) => theme.size.size6rem};
  text-transform: uppercase;
  white-space: nowrap;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    font-size: ${({ theme }) => theme.size.size4_8rem};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size2rem};
  }
`;

export const Line = styled.div`
  width: 20%;
  height: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.cornflowerBlue};
  border-radius: 1rem 0 0 1rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    height: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const ContentService = styled.article`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20rem;
  margin-top: 8rem;
  padding: 0 4rem 0 0;

  svg {
    width: 40rem;
    height: fit-content;
  }

  @media (max-width: 1280px) {
    gap: 10rem;
  }

  @media (max-width: 1024px) {
    gap: 6rem;

    svg {
      width: 30rem;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 3rem;
    padding: 0 2rem 0 0;
    gap: 3rem;
    svg {
      width: 25rem;
    }
  }
`;

export const DescriptionService = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.color.cultured};
  font-size: ${({ theme }) => theme.size.size4rem};
  width: 30%;

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size3rem};
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size1_8rem};
    width: 100%;
  }
`;
