import Loading from "@/common/molecules/Loading";
import Header from "@/common/organisms/Header";
import { Over, Section } from "@/styles/components/styles";
import ContactTemplate from "@/templates/Contact";
import IntroTemplate from "@/templates/Intro";
import ServicesTemplate from "@/templates/Services";
import WorksTemplate from "@/templates/Works";
import useAnimation from "./animation";

const HomeTemplate = () => {
  const { navRef, sectionBlueRef, headerRef, scrollRef } = useAnimation();

  return (
    <Section>
      <Loading />
      <Header headerRef={headerRef} scrollRef={scrollRef} navRef={navRef}>
        <IntroTemplate />
        <Over ref={sectionBlueRef}>
          <ServicesTemplate className="section" />
        </Over>
        <WorksTemplate className="section" />
        <ContactTemplate className="section" />
      </Header>
    </Section>
  );
};

export default HomeTemplate;
