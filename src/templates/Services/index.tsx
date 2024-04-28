import { Example } from "@/styles/components/styles";
import { FC } from "react";
import * as S from "./styles";
import { useLanguageContext } from "@/context/language";

const ServicesTemplate: FC<{ className: string }> = ({ className }) => {
  const { services } = useLanguageContext()?.content;
  return (
    <Example className={className}>
      <S.Article>
        <S.Title>{services.title}</S.Title>
        <S.Description>
          <S.LineText>
            <S.TextFixed>{services.showDescription.first}</S.TextFixed>
            <S.ChangeText>
              <S.TextSecondary>{services.showDescription.second}</S.TextSecondary>
              {services.description.map((text: React.ReactNode, index: number) => (
                <S.TextSecondary key={index}>{text}</S.TextSecondary>
              ))}
            </S.ChangeText>
          </S.LineText>

          <S.TextTertiary>{services.showDescription.third}</S.TextTertiary>
        </S.Description>
      </S.Article>
    </Example>
  );
};

export default ServicesTemplate;
