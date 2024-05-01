import _Share from "@/common/molecules/Share";
import TalkToMe from "@/common/molecules/TalkToMe";
import { Wrapper } from "@/styles/components/styles";
import styled from "styled-components";

export const Section = styled(Wrapper)`
  padding: 18rem 0rem 12rem;

  @media (max-width: 600px) {
    padding: 8rem 0rem 6rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 20rem;
`;

export const Share = styled(_Share)`
  width: 100%;
  padding-right: 7rem;
`;

export const Talk = styled(TalkToMe)`
  width: 100%;
  padding-left: 7rem;
`;
