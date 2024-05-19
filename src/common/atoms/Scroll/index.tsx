import * as S from "./styles";
import useAnimation from "./animation";
import { useLanguageContext } from "@/context/language";

const Scroll = () => {
  const { page, total } = useLanguageContext()?.content?.header;
  const { countRef } = useAnimation();

  return (
    <S.ScrollContainer>
      {page}{" "}
      <S.Count ref={countRef}>
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
