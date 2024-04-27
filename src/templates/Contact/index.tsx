import { Section } from "@/styles/components/styles";
import { FC } from "react";

const ContactTemplate: FC<{ className?: string }> = ({ className }) => {
  return <Section className={className} />;
};

export default ContactTemplate;
