import _Share from "@/common/molecules/Share";
import TalkToMe from "@/common/molecules/TalkToMe";
import { Wrapper } from "@/styles/components/styles";
import styled from "styled-components";

export const Section = styled(Wrapper)`
  padding: 18rem 0rem 12rem;
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 20rem;
  align-items: flex-end;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8rem;
    margin-top: 10rem;
  }
`;

export const Share = styled(_Share)`
  width: 100%;
  padding-right: 7rem;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Talk = styled(TalkToMe)`
  width: 100%;
  padding-left: 7rem;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;
