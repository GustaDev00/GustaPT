import { FC } from "react";
import { useLanguageContext } from "@/context/language";
import { ListServicesProps } from "@/common/molecules/ListServices/props";
import * as S from "./styles";

const ServicesTemplate: FC<{ className: string }> = ({ className }) => {
  const { services } = useLanguageContext()?.content;
  return (
    <S.Services className={className}>
      <S.Article>
        <S.Title>{services.title}</S.Title>
        <S.Description>
          <S.LineText>
            <S.TextFixed>{services.showDescription.first}</S.TextFixed>
            <S.ChangeText>
              <S.SpinText>
                <S.TextSecondary>{services.showDescription.second}</S.TextSecondary>
                {services.description.map((text: React.ReactNode, index: number) => (
                  <S.TextSecondary key={index}>{text}</S.TextSecondary>
                ))}
              </S.SpinText>
            </S.ChangeText>
          </S.LineText>
          <S.TextTertiary>{services.showDescription.third}</S.TextTertiary>
        </S.Description>
      </S.Article>

      <S.Service>
        {services.list.map((service: ListServicesProps, index: number) => (
          <S.ShowService key={index} {...service} />
        ))}
      </S.Service>
    </S.Services>
  );
};

export default ServicesTemplate;
