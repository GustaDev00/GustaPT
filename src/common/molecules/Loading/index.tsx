import * as S from "./styles";
import { useLanguageContext } from "@/context/language";
import useAnimation from "./animation";
import { useState } from "react";
import useEffectResize from "@/utils/useEffectResize";

const Loading = () => {
  const { text } = useLanguageContext()?.content?.loading;
  const [numSquares, setNumSquares] = useState(0);
  const { textRef, loadingRef, squaresRef, containerRef } = useAnimation();

  if (!text) return <></>;

  const Squares = () => {
    useEffectResize(
      () => {
        const squareSize = window.innerWidth > 600 ? 100 : 50;

        const width = window.innerWidth + 100;
        const height = window.innerHeight;
        const numSquaresWidth = Math.ceil(width / squareSize);
        const numSquaresHeight = Math.ceil(height / squareSize);
        const totalSquares = numSquaresWidth * numSquaresHeight;

        setNumSquares(totalSquares);
      },
      [],
      true,
    );

    return (
      <S.SquaresContainer>
        {Array.from({ length: numSquares }, (_, i) => (
          <S.Squares
            key={i}
            ref={(el: HTMLDivElement | null) => {
              squaresRef.current[i] = el;
            }}
          />
        ))}
      </S.SquaresContainer>
    );
  };

  return (
    <S.Loading ref={containerRef}>
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
