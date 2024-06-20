import { FC } from "react";
import * as S from "./styles";
import { ListServicesProps } from "./props";

const ListServices: FC<ListServicesProps> = ({ title, description, icon }) => {
  return (
    <S.ListServicesContainer>
      <S.Article>
        <S.TitleService>{title}</S.TitleService>
        <S.Line />
      </S.Article>
      <S.ContentService1>
        <S.DescriptionService>{description}</S.DescriptionService>
        {icon()}
      </S.ContentService1>
    </S.ListServicesContainer>
  );
};

export default ListServices;
