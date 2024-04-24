import styled from "styled-components";

export const TitleLogoContainer = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 30%;
  width: 61%;

  @media (max-width: 1100px) {
  }

  @media (max-width: 600px) {
    width: 80%;
    right: 0.5rem;
  }
`;

export const Article = styled.article``;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.size10rem};
  color: ${({ theme }) => theme.color.violetBlue};

  img {
    width: ${({ theme }) => theme.size.size8rem};
  }

  br {
    display: none;
  }

  @media (max-width: 1100px) {
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

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.size.size3rem};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size1_6rem};
  }
`;
