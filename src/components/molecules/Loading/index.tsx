import * as S from "./styles";
import { useLanguageContext } from "@/Context/language";
import useAnimation from "./animation";
import Squares from "@/components/molecules/Loading/Squares";

const Loading = () => {
  const { text } = useLanguageContext()?.content?.loading;
  const { textRef, loadingRef } = useAnimation();

  if (!text) return <></>;

  return (
    <S.Loading>
      <Squares />
      <S.LoadingContainer ref={loadingRef}>
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
    </S.Loading>
  );
};

export default Loading;
