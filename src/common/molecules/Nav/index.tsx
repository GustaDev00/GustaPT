import { useLanguageContext } from "@/context/language";
import * as S from "./styles";
import { Link } from "./props";

const Nav = () => {
  const { links, language } = useLanguageContext()?.content?.nav;

  return (
    <S.NavContainer>
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
