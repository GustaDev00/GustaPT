import Loading from "@/components/molecules/Loading";
import ContactTemplate from "../Contact";
import IntroTemplate from "../Intro";
import ServicesTemplate from "../Services";
import WorksTemplate from "../Works";

const HomeTemplate = () => {
  return (
    <>
      <Loading />
      <IntroTemplate />
      <ServicesTemplate />
      <WorksTemplate />
      <ContactTemplate />
    </>
  );
};

export default HomeTemplate;
