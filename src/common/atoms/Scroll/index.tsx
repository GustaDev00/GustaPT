import { use } from "react";
import * as S from "./styles";
import { useLanguageContext } from "@/context/language";

const Scroll = () => {
  const { page, total } = useLanguageContext()?.content?.header;

  return (
    <S.ScrollContainer>
      {page} 1/{total}
    </S.ScrollContainer>
  );
};

export default Scroll;
