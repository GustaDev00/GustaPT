import * as S from "./styles";
import useAnimation from "./animation";

const Background = () => {
  const { up, down, upSlow } = useAnimation();
  return (
    <S.BackgroundContainer>
      <S.Col ref={up}>
        <S.Circle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Circle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Circle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Circle />
        <S.Rectangle />
        <S.Rectangle />
      </S.Col>

      <S.Col ref={down}>
        <S.Circle />
        <S.Circle />
        <S.Rectangle />
        <S.Circle />
        <S.Circle />
        <S.Rectangle />
        <S.Circle />
        <S.Circle />
        <S.Rectangle />
        <S.Circle />
        <S.Circle />
        <S.Rectangle />
      </S.Col>

      <S.Col ref={upSlow}>
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
        <S.Rectangle />
      </S.Col>
    </S.BackgroundContainer>
  );
};

export default Background;
