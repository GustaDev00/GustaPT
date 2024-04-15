import HomeTemplate from "../src/templates/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gusta.pt | Portifolio, serviços e projetos</title>
      </Head>
      <HomeTemplate />
    </>
  );
}
