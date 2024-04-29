import { FC } from "react";
import * as S from "./styles";
import { ProjectsProps } from "./props";

const Projects: FC<ProjectsProps> = ({ projects }) => {
  console.log(projects, "projects");

  return (
    <S.ProjectsContainer>
      {projects.map((project, index) => (
        <S.Card key={index} {...project} />
      ))}
    </S.ProjectsContainer>
  );
};

export default Projects;
