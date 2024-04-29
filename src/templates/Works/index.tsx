import Titles from "@/common/molecules/Titles";
import Projects from "@/common/organisms/Projects";
import { useLanguageContext } from "@/context/language";
import { Wrapper } from "@/styles/components/styles";
import { FC } from "react";

const WorksTemplate: FC<{ className?: string }> = ({ className }) => {
  const { works } = useLanguageContext()?.content;

  return (
    <Wrapper className={className}>
      <Titles type="stripe">{works.title}</Titles>

      <Projects projects={works.projects} />
    </Wrapper>
  );
};

export default WorksTemplate;
