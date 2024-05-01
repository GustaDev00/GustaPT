import { useLanguageContext } from "@/context/language";
import * as S from "./styles";

const Share = ({ className }: { className?: string }) => {
  const { title, links } = useLanguageContext()?.content?.contact?.social;

  return (
    <S.ShareContainer className={className}>
      <S.Title>{title}</S.Title>

      <S.Links>
        <S.List>
          {links.map(({ title, ...url }: { title: string }) => (
            <S.Item key={title}>
              <S.Link {...url}>{title}</S.Link>
            </S.Item>
          ))}
        </S.List>
      </S.Links>
    </S.ShareContainer>
  );
};

export default Share;
