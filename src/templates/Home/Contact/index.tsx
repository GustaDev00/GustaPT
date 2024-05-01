import Titles from "@/common/molecules/Titles";
import { useLanguageContext } from "@/context/language";
import * as S from "./styles";
import { FC } from "react";

const ContactTemplate: FC<{ className?: string }> = ({ className }) => {
  const { contact } = useLanguageContext()?.content;

  return (
    <S.Section className={className}>
      <Titles>{contact.title}</Titles>

      <S.Flex>
        <S.Talk />
        <S.Share />
      </S.Flex>
    </S.Section>
  );
};

export default ContactTemplate;
