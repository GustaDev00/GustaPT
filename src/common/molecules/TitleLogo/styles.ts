import styled from "styled-components";

export const TitleLogoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Article = styled.article`
  padding-bottom: 30rem;
  width: 61%;

  @media (max-width: 1280px) {
    padding-bottom: 20rem;
  }

  @media (max-width: 600px) {
    padding-bottom: 40%;
    width: 80%;
    right: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.size10rem};
  color: ${({ theme }) => theme.color.violetBlue};

  img {
    width: ${({ theme }) => theme.size.size8rem};
  }

  br {
    display: none;
  }

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size8rem};

    img {
      width: ${({ theme }) => theme.size.size6rem};
    }

    br {
      display: block;
    }
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size4rem};

    img {
      width: ${({ theme }) => theme.size.size3rem};
    }
  }
`;

export const Description = styled.p`
  width: 90%;
  color: ${({ theme }) => theme.color.gunmetal};
  font-size: ${({ theme }) => theme.size.size4rem};
  font-weight: 400;

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size3rem};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size1_6rem};
  }
`;
