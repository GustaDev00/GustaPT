import { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

function MyDocument({ styles }: { styles: JSX.Element[] }) {
  return (
    <Html lang="pt-br">
      <Head>
        <meta
          name="description"
          content="Descubra meus serviços e projetos que eu ja tive a honra de realizar e fazer parte. Alguns dos serviços mais populres são: ecommerce, web site e seo. Para ecommerce eu mexo muito com vtex, mas também conheço outras!"
        />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_URL}/`} />
        <meta property="og:title" content="Gusta.pt | Portifolio, serviços e projetos" />
        <meta
          property="og:description"
          content="Descubra meus serviços e projetos que eu ja tive a honra de realizar e fazer parte. Alguns dos serviços mais populres são: ecommerce, web site e seo. Para ecommerce eu mexo muito com vtex, mas também conheço outras!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Gustavo Felipe da Silva Pontes" />
        <meta name="theme-color" content="#2D2F39" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL}/`} />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {styles}
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...(Array.isArray(initialProps.styles) ? initialProps.styles : []),
        sheet.getStyleElement(),
      ],
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
