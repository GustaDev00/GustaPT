import * as S from "./styles";
import { useLanguageContext } from "@/Context/language";

const Loading = () => {
  const { text } = useLanguageContext()?.content?.loading;

  if (!text) return <></>;

  return (
    <S.LoadingContainer>
      <S.Content>
        {text.split("").map((t: string, index: number) => {
          if (t === " ") return <S.Text key={index}>&nbsp;</S.Text>;

          return <S.Text key={index}>{t}</S.Text>;
        })}

        <S.Text>|</S.Text>
      </S.Content>
    </S.LoadingContainer>
  );
};

export default Loading;
