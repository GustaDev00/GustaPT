import { useLanguageContext } from "@/Context/language";
import * as S from "./styles";
import { FC } from "react";
import { LogoProps } from "./props";

const Logo: FC<LogoProps> = ({ className }) => {
  const { logo } = useLanguageContext()?.content;

  if (!logo) return <></>;

  return <S.LogoContainer className={className}>{logo}</S.LogoContainer>;
};

export default Logo;
