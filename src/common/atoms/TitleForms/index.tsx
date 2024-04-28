import { FC } from "react";
import * as S from "./styles";
import { TitleFormsProps } from "./props";

const TitleForms: FC<TitleFormsProps> = ({ children, className }) => {
  return <S.TitleFormsContainer className={className}>{children}</S.TitleFormsContainer>;
};

export default TitleForms;
