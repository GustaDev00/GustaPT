import _Card from "@/common/molecules/Card";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  row-gap: 4rem;
  margin-top: 15rem;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

export const Card = styled(_Card)``;
