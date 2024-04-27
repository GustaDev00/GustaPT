import { Example } from "@/styles/components/styles";
import { FC } from "react";

const ServicesTemplate: FC<{ className: string }> = ({ className }) => {
  return <Example className={className} />;
};

export default ServicesTemplate;
