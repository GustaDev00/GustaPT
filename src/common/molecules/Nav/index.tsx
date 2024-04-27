import { useLanguageContext } from "@/context/language";
import * as S from "./styles";
import { Link, NavProps } from "./props";
import { FC } from "react";

const Nav: FC<NavProps> = ({ navRef }) => {
  const { links, language } = useLanguageContext()?.content?.nav;

  return (
    <S.NavContainer ref={navRef}>
      <S.Logo />
      <S.List>
        {links.map((link: Link, index: number) => (
          <S.Item key={index}>
            <S.Link {...link}>{link.title}</S.Link>
          </S.Item>
        ))}
      </S.List>

      <S.ListLg>
        {language.map((link: Link, index: number) => (
          <S.ItemLg key={index}>
            <S.Link {...link}>{link.title}</S.Link>
          </S.ItemLg>
        ))}
      </S.ListLg>
    </S.NavContainer>
  );
};

export default Nav;
