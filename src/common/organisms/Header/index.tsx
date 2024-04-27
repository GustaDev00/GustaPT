import { FC } from "react";
import * as S from "./styles";
import { HeaderProps } from "./props";

const Header: FC<HeaderProps> = ({ children, navRef, scrollRef, headerRef }) => {
  return (
    <>
      <S.Header ref={headerRef}>
        <S.Logo />
        <S.Scroll scrollRef={scrollRef} />
      </S.Header>

      <S.MainChildren>{children}</S.MainChildren>

      <S.Nav navRef={navRef} />
    </>
  );
};

export default Header;
