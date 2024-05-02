import { FC } from "react";
import * as S from "./styles";
import { useLanguageContext } from "@/context/language";
import { ScrollProps } from "./props";

const Scroll: FC<ScrollProps> = ({ scrollRef }) => {
  const { page, total } = useLanguageContext()?.content?.header;

  return (
    <S.ScrollContainer>
      {page}{" "}
      <S.Count ref={scrollRef}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </S.Count>
      /{total}
    </S.ScrollContainer>
  );
};

export default Scroll;
