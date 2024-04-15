import ContactTemplate from "@/templates/Contact";
import IntroTemplate from "@/templates/Intro";
import ServicesTemplate from "@/templates/Services";
import WorksTemplate from "@/templates/Works";

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
