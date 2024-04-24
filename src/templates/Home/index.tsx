import Loading from "@/common/molecules/Loading";
import Header from "@/common/organisms/Header";
import { Over, Section } from "@/styles/components/styles";
import ContactTemplate from "@/templates/Contact";
import IntroTemplate from "@/templates/Intro";
import ServicesTemplate from "@/templates/Services";
import WorksTemplate from "@/templates/Works";

const HomeTemplate = () => {
  return (
    <Section>
      <Loading />
      <Header>
        <IntroTemplate />
        <Over>
          <ServicesTemplate />
          <WorksTemplate />
          <ContactTemplate />
        </Over>
      </Header>
    </Section>
  );
};

export default HomeTemplate;
