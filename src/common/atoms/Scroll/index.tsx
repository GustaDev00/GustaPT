import { FC } from "react";
import * as S from "./styles";
import { useLanguageContext } from "@/context/language";
import { ScrollProps } from "./props";

const Scroll: FC<ScrollProps> = ({ scrollRef }) => {
  const { page, total } = useLanguageContext()?.content?.header;

  return (
    <S.ScrollContainer>
      {page} <S.Count ref={scrollRef}>1</S.Count>/{total}
    </S.ScrollContainer>
  );
};

export default Scroll;
