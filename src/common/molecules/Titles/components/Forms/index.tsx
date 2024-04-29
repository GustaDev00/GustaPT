import { FC } from "react";
import { TitleProps } from "../../props";
import * as S from "./styles";

const TitleForms: FC<TitleProps> = ({ children, className }) => {
  return <S.TitleFormsContainer className={className}>{children}</S.TitleFormsContainer>;
};

export default TitleForms;
