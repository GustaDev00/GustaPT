import { FC } from "react";
import * as S from "./styles";
import { HeaderProps } from "./props";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <S.Header>
        <S.Logo />
        <S.Scroll />
      </S.Header>

      <S.MainChildren>{children}</S.MainChildren>

      <S.Nav />
    </>
  );
};

export default Header;
