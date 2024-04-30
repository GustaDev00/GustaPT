import styled from "styled-components";
import _LazyImage from "@/common/atoms/LazyImage";

export const Image = styled(_LazyImage)`
  width: 78rem;
  height: 100%;

  @media (max-width: 1280px) {
    width: 35rem;
  }

  @media (max-width: 1024px) {
    width: 40rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Hover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black05};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 1rem 0.5rem;
  border-radius: 1rem;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
`;

export const Tecnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1rem;
`;

export const Technology = styled.p`
  padding: 0.5rem 1rem;
  border-radius: 50rem;
  color: ${({ theme }) => theme.color.cultured};
  font-size: ${({ theme }) => theme.size.size1_6rem};
  font-weight: 400;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.black};
`;

export const CardContainer = styled.a`
  position: relative;
  display: block;

  &:hover {
    ${Hover} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
