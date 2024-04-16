import React, { useEffect, useState } from "react";
import useAnimation from "./animation";
import * as S from "../styles";

const Squares = () => {
  const { squaresRef, containerRef } = useAnimation();
  const [numSquares, setNumSquares] = useState(0);
  const squareSize = 100;

  useEffect(() => {
    const width = window.innerWidth + 100;
    const height = window.innerHeight;
    const numSquaresWidth = Math.ceil(width / squareSize);
    const numSquaresHeight = Math.ceil(height / squareSize);
    const totalSquares = numSquaresWidth * numSquaresHeight;

    setNumSquares(totalSquares);
  }, []);

  return (
    <S.SquaresContainer ref={containerRef}>
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

export default Squares;
