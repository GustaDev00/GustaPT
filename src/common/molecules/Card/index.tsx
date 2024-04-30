import { FC } from "react";
import * as S from "./styles";
import { CardProps } from "./props";

const Card: FC<CardProps> = ({ link, img, technology }) => {
  return (
    <S.CardContainer {...link}>
      <S.Image {...img} />
      <S.Hover>
        <S.Tecnologies>
          {technology.map((tech, index) => (
            <S.Technology key={index}>{tech}</S.Technology>
          ))}
        </S.Tecnologies>
      </S.Hover>
    </S.CardContainer>
  );
};

export default Card;
