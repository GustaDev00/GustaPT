import styled from "styled-components";
import ListServices from "@/common/molecules/ListServices";
import { Section } from "@/styles/components/styles";
import Titles from "@/common/molecules/Titles";

export const Services = styled(Section)`
  background-color: ${({ theme }) => theme.color.gunmetal};
  border-radius: 6rem;
  padding: 18rem 0 0 7rem;

  @media (max-width: 500px) {
    border-radius: 3rem;
    padding: 8rem 0 0 5rem;
  }
`;

export const Article = styled.article`
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const Title = styled(Titles)`
  div:first-child {
    span {
      margin-left: 1rem;
      width: 40rem;
      height: 7rem;
    }
  }

  div:last-child {
    span {
      margin-right: 2rem;
    }
  }

  @media (max-width: 500px) {
    div:first-child {
      span {
        margin-left: 1rem;
        width: 18rem;
        height: 4rem;
      }
    }

    div:last-child {
      span {
        margin-right: 1rem;
      }
    }
  }
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.size.size4_8rem};
  color: ${({ theme }) => theme.color.cultured};
  line-height: 4rem;
  gap: 1rem;

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size3_8rem};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.size.size2_5rem};
  }
`;

export const LineText = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;

  @media (max-width: 1280px) {
    height: 4rem;
  }

  @media (max-width: 500px) {
    height: 2.4rem;
  }
`;

export const TextFixed = styled.p``;

export const ChangeText = styled.div`
  position: relative;
  transform-style: preserve-3d;
  height: 4.5rem;
  width: 21rem;
  overflow: hidden;
`;

export const SpinText = styled.p`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  gap: 2rem;
  bottom: 0.5rem;
  left: 0;
`;

export const TextSecondary = styled.span``;

export const TextTertiary = styled.p``;

export const Service = styled.div`
  padding: 20rem 0 0 0;

  @media (max-width: 500px) {
    padding: 0;
  }
`;

export const ShowService = styled(ListServices)``;
