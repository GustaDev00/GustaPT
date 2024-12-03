import Head from "next/head";
import HomeTemplate from "@/templates/Home";
import { useLanguageContext } from "@/context/language";
import { useEffect } from "react";

const Home = () => {
  const { setType } = useLanguageContext();

  useEffect(() => {
    setType("pt");
  }, [setType]);

  return (
    <>
      <Head>
        <title>Gusta.pt | Portifolio, serviços e projetos</title>
      </Head>
      <HomeTemplate />
    </>
  );
};

export default Home;
