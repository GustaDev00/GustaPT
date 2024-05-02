import { IconVoice } from "@/svgs/voice";
import styled from "styled-components";

export const TalkToMeContainer = styled.div`
  background-color: ${({ theme }) => theme.color.violetBlue};
  border-radius: 0 50rem 50rem 0;
  padding: 7rem;

  @media (max-width: 1280px) {
    padding: 6rem;
  }

  @media (max-width: 600px) {
    padding: 4rem;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.size8rem};
  color: ${({ theme }) => theme.color.cultured};

  @media (max-width: 1280px) {
    font-size: ${({ theme }) => theme.size.size6rem};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.size.size3rem};
  }
`;

export const TalkContainer = styled.div`
  margin: 15rem 0rem 10rem 15rem;

  @media (max-width: 600px) {
    margin: 0rem;
  }
`;

export const Button = styled.button`
  width: 20rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.cultured};
  border-radius: 100%;

  @media (max-width: 600px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const Voice = styled(IconVoice)`
  width: 5.6rem;

  @media (max-width: 600px) {
    width: 2.8rem;
  }
`;

export const Audio = styled.div``;
