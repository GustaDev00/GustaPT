import TitleForms from "@/common/atoms/TitleForms";
import styled from "styled-components";
import ListServices from "@/common/molecules/ListServices";
import { Section } from "@/styles/components/styles";

export const Services = styled(Section)`
  background-color: ${({ theme }) => theme.color.gunmetal};
  border-radius: 6rem;

  @media (max-width: 600px) {
    border-radius: 3rem;
  }
`;

export const Article = styled.article`
  padding: 18rem 0 0 7rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 8rem 0 0 5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const Title = styled(TitleForms)`
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

  @media (max-width: 600px) {
    div:first-child {
      span {
        margin-left: 1rem;
        width: 15rem;
        height: 3rem;
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

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
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
  padding: 20rem 0 0 7rem;

  @media (max-width: 600px) {
    padding: 0rem 0 0 5rem;
  }
`;

export const ShowService = styled(ListServices)``;
