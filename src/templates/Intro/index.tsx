import Background from "@/common/molecules/Background";
import Titles from "@/common/molecules/Titles";
import { Float } from "@/styles/components/styles";

const IntroTemplate = () => {
  return (
    <Float>
      <Titles type="logo" />
      <Background />
    </Float>
  );
};

export default IntroTemplate;
