import TitleForms from "@/common/atoms/TitleForms";
import styled from "styled-components";

export const Article = styled.article`
  padding: 18rem 0 0 7rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 600px) {
    padding-left: 5rem;
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
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.size.size4_8rem};
  color: ${({ theme }) => theme.color.cultured};
  line-height: 4rem;
  gap: 1rem;
`;

export const LineText = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`;

export const TextFixed = styled.p``;

export const ChangeText = styled.p`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  gap: 2rem;
  bottom: 0;
  left: 11rem;
  height: 4.5rem;
  /* overflow: hidden; */
  transform-style: preserve-3d;
`;

export const TextSecondary = styled.span``;

export const TextTertiary = styled.p``;

export const TextQuaternary = styled.p``;
