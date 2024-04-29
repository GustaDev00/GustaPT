import { FC } from "react";
import * as S from "./styles";
import { TitlesProps } from "./props";
import TitleLogo from "./components/Logo";
import TitleForms from "./components/Forms";
import LogoStripe from "./components/Stripe";

const Titles: FC<TitlesProps> = ({ type, ...props }) => {
  switch (type) {
    case "logo":
      return <TitleLogo />;
    case "forms":
      return <TitleForms {...props} />;
    case "stripe":
      return <LogoStripe {...props} />;
  }
};

export default Titles;
