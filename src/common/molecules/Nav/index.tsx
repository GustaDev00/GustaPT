import { useLanguageContext } from "@/Context/language";
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
            <S.Link {...link}>{link.name}</S.Link>
          </S.Item>
        ))}
      </S.List>

      <S.List>
        {language.map((link: Link, index: number) => (
          <S.ItemLg key={index}>
            <S.Link {...link}>{link.name}</S.Link>
          </S.ItemLg>
        ))}
      </S.List>
    </S.NavContainer>
  );
};

export default Nav;
