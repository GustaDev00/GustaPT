import * as S from "./styles";
import useAnimation from "./animation";

const Background = () => {
  // const { up, down, up2 } = useAnimation();
  return (
    <S.BackgroundContainer>
      <S.Col>
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

      <S.Col>
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

      <S.Col>
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
