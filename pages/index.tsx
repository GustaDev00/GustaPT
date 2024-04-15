import HomeTemplate from "../src/templates/Home";
import Head from "next/head";

const Home = () => {
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
