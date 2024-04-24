import styled from "styled-components";
import LazyImage from "../../atoms/LazyImage";

export const TitleLogoContainer = styled.div`
  position: absolute;
  right: 4rem;
  bottom: 30%;
  width: 61%;
`;

export const Article = styled.article``;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.size10rem};
  color: ${({ theme }) => theme.color.violetBlue};

  img {
    width: ${({ theme }) => theme.size.size8rem};
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.gunmetal};
  font-size: ${({ theme }) => theme.size.size4rem};
  font-weight: 400;
`;
