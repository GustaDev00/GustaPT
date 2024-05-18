import React, { FC } from "react";
import * as S from "./styles";
import CustomBrProps from "./props";

export const CustomBr: FC<CustomBrProps> = ({ byMediaquery, byViewport }) => {
  return <S.Br byMediaquery={byMediaquery} byViewport={byViewport} />;
};
