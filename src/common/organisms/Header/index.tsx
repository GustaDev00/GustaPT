import Logo from "@/common/atoms/Logo";
import * as S from "./styles";
import { FC } from "react";
import { HeaderProps } from "./props";
import Nav from "@/common/molecules/Nav";
import Scroll from "@/common/atoms/Scroll";

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <S.Header>
        <Logo />
        <Scroll />
      </S.Header>

      <S.Main>{children}</S.Main>

      <Nav />
    </>
  );
};

export default Header;
