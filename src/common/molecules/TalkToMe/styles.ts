import { IconVoice } from "@/svgs/voice";
import styled from "styled-components";

export const TalkToMeContainer = styled.div`
  background-color: ${({ theme }) => theme.color.violetBlue};
  border-radius: 0 50rem 50rem 0;
  padding: 7rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.size8rem};
  color: ${({ theme }) => theme.color.cultured};
`;

export const TalkContainer = styled.div`
  margin: 15rem 0rem 10rem 15rem;
`;

export const Button = styled.button`
  width: 20rem;
  height: 20rem;
  background-color: ${({ theme }) => theme.color.cultured};
  border-radius: 100%;
`;

export const Voice = styled(IconVoice)`
  width: 5.6rem;
`;

export const Audio = styled.div``;
