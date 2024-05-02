import Background from "@/common/molecules/Background";
import Titles from "@/common/molecules/Titles";
import { Float } from "@/styles/components/styles";
import { FC } from "react";

const IntroTemplate: FC<{ className: string }> = ({ className }) => {
  return (
    <Float className={className}>
      <Titles type="logo" />
      <Background />
    </Float>
  );
};

export default IntroTemplate;
