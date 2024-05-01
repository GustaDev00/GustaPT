import { useLanguageContext } from "@/context/language";
import * as S from "./styles";

const TalkToMe = ({ className }: { className?: string }) => {
  const { voice } = useLanguageContext()?.content?.contact;

  return (
    <S.TalkToMeContainer className={className}>
      <S.Title>{voice}</S.Title>
      <S.TalkContainer>
        <S.Button>
          <S.Voice />
        </S.Button>
      </S.TalkContainer>
    </S.TalkToMeContainer>
  );
};

export default TalkToMe;
