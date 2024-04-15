import * as S from "./styles";
import { useLanguageContext } from "@/Context/language";
import useAnimation from "./animation";

const Loading = () => {
  const { text } = useLanguageContext()?.content?.loading;
  const { textRef } = useAnimation();

  if (!text) return <></>;

  return (
    <S.LoadingContainer>
      <S.Content>
        {text.split("").map((t: string, index: number) => {
          const assignRef = (el: HTMLParagraphElement | null) => {
            textRef.current[index] = el;
          };

          return (
            <S.Text key={index} ref={assignRef}>
              {t === " " ? "\u00A0" : t}
            </S.Text>
          );
        })}

        <S.Text>|</S.Text>
      </S.Content>
    </S.LoadingContainer>
  );
};

export default Loading;
