import { useLanguageContext } from "@/context/language";
import * as S from "./styles";

const TitleLogo = () => {
  const { title, description } = useLanguageContext()?.content?.intro;

  return (
    <S.TitleLogoContainer>
      <S.Article>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Article>
    </S.TitleLogoContainer>
  );
};

export default TitleLogo;
