import Loading from "@/common/molecules/Loading";
import Header from "@/common/organisms/Header";
import { Section } from "@/styles/components/styles";
import ContactTemplate from "@/templates/Contact";
import IntroTemplate from "@/templates/Intro";
import ServicesTemplate from "@/templates/Services";
import WorksTemplate from "@/templates/Works";

const HomeTemplate = () => {
  return (
    <Section>
      {/* <Loading /> */}
      <Header>
        <IntroTemplate />
        <ServicesTemplate />
        <WorksTemplate />
        <ContactTemplate />
      </Header>
    </Section>
  );
};

export default HomeTemplate;
