import ContactTemplate from "../Contact";
import IntroTemplate from "../Intro";
import ServicesTemplate from "../Services";
import WorksTemplate from "../Works";

const HomeTemplate = () => {
  return (
    <>
      <IntroTemplate />
      <ServicesTemplate />
      <WorksTemplate />
      <ContactTemplate />
    </>
  );
};

export default HomeTemplate;
