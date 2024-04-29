import LazyImage from "@/common/atoms/LazyImage";
import { IconEcommerce, IconSEO, IconWebDevelopment } from "@/svgs/services";

type AvailableLanguages = "pt" | "en";

type Content = {
  [K in AvailableLanguages]?: Record<string, any>;
};

const content: Content = {
  pt: {
    logo: "g.",
    header: {
      page: "página",
      total: 4,
    },
    nav: {
      links: [
        { title: "INÍCIO", href: "#home" },
        { title: "SERVIÇOS", href: "#services" },
        { title: "TRABALHOS", href: "#works" },
        { title: "CONTATO", href: "#contact" },
      ],
      language: [
        { title: "EN", href: "/" },
        { title: "PT", href: "/pt" },
      ],
    },
    loading: {
      text: "Gustavo Pontes",
    },
    intro: {
      title: (
        <>
          SALVE! GUSTAVO <br />P<LazyImage src="/imgs/eu.png" alt="Gustavo Pontes" notLazy={true} />
          NTES AQUI
        </>
      ),
      description: (
        <>
          Desenvolvedor Front-End apaixonado por tornar a web mais bonita e acessível. Com foco em
          projetos de e-commerce e sites de institucional com um SEO impecável, também crio
          experiências digitais envolventes que unem design e funcionalidade.
        </>
      ),
    },
    services: {
      title: (
        <>
          <div>
            Meus <span />
          </div>
          <br />
          <div>
            <span />
            Serviços
          </div>
        </>
      ),
      showDescription: {
        first: "Seu",
        second: "negócio",
        third: "seu estilo",
      },
      description: [<>loja</>, <>site</>, <>resultado</>],
      list: [
        {
          title: "E-commerce",
          description: (
            <>
              Eu crio lojas online incríveis que cativam os clientes e facilitam as compras. De
              configurar o carrinho de compras para integrar métodos de pagamento seguros, estou
              comprometido em proporcionando uma experiência de compra perfeita para seus clientes.
            </>
          ),
          icon: IconEcommerce,
        },
        {
          title: "Web site",
          description: (
            <>
              Como desenvolvedor web, transformo ideias em realidade digital. Minha paixão é criar
              sites funcionais, responsivos e visualmente atraentes. Quer seja uma empresa website
              ou uma plataforma complexa, estou pronto para enfrentar qualquer desafio.
            </>
          ),
          icon: IconWebDevelopment,
        },
        {
          title: "SEO",
          description: (
            <>
              Como especialista em SEO, otimizo seu site para que seja facilmente encontrado pelos
              mecanismos de busca. Da pesquisa de palavras-chave à criação de conteúdo relevante,
              estou focado em aumentar o seu visibilidade online e atraindo tráfego mais
              qualificado.
            </>
          ),
          icon: IconSEO,
        },
      ],
    },
    works: {
      title: "Trabalhos",
      projects: [
        {
          link: {
            href: "https://www.altogiro.com.br",
            target: "_blank",
            title: "Alto Giro",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/altogiro.png",
            alt: "Alto Giro",
          },
          technology: ["React", "Jest", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://www.ene2ese.com.br",
            target: "_blank",
            title: "Ene2ese",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/ene2ese.png",
            alt: "Ene2ese",
          },
          technology: ["Vanilla JS", "Gulp", "scss", "vtex"],
        },
        {
          link: {
            href: "https://www.pantaspaladar.com.br",
            target: "_blank",
            title: "Pantas Paladar",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/pantaspaladar.png",
            alt: "Pantas Paladar",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "https://www.farmrio.com.br",
            target: "_blank",
            title: "Farm Rio",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/farmrio.png",
            alt: "Farm Rio",
          },
          technology: ["react", "styled componentes", "Gulp", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://www.bateriasgalileu.com.br",
            target: "_blank",
            title: "Baterias Galileu",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/bateriasgalileu.png",
            alt: "Baterias Galileu",
          },
          technology: ["next", "styled componentes", "react"],
        },
        {
          link: {
            href: "https://www.jeansclub.com.br",
            target: "_blank",
            title: "Jeans Club",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/jeansclub.png",
            alt: "Jeans Club",
          },
          technology: ["React", "Jest", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://libercomunicacaovisual.com.br",
            target: "_blank",
            title: "Liber Comunicação Visual",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/libercomunicacaovisual.png",
            alt: "Liber Comunicação Visual",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "http://bubowl.com.br",
            target: "_blank",
            title: "bubowl",
          },
          img: {
            src: "/imgs/works/bubowl.png",
            alt: "bubowl",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "https://www.shopdoscabelos.com.br",
            target: "_blank",
            title: "Shop dos cabelos",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/shopdoscabelos.png",
            alt: "Shop dos cabelos",
          },
          technology: ["React", "scss", "vtex io"],
        },
      ],
    },
    contact: {
      title: (
        <>
          Vamos trabalhar <span>juntos?</span>
        </>
      ),
      voice: "Fale comigo",
      social: {
        title: "REDES SOCIAIS",
        links: [
          {
            href: "mailto:gustavo.4dev@gmail.com",
            title: "gustavo.4dev@gmail.com",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.linkedin.com/in/gustavo-pontes-aa8219287/",
            title: "linkedin",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.instagram.com/off.gu/",
            title: "instagram",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://github.com/GustaDev00",
            title: "github",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.youtube.com/channel/UCJSZjUFJoVeKgAF2zJ6HPgg",
            title: "youtube",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.awwwards.com/gustavo-felipe/",
            title: "awwwards",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
        ],
      },
    },
  },
  en: {
    logo: "g.",
    header: {
      page: "scroll view",
      total: 4,
    },
    nav: {
      links: [
        { title: "Home", href: "#home" },
        { title: "SERVICES", href: "#services" },
        { title: "WORKS", href: "#works" },
        { title: "CONTACT", href: "#contact" },
      ],
      language: [
        { title: "EN", href: "/" },
        { title: "PT", href: "/pt" },
      ],
    },
    loading: {
      text: "Gustavo Pontes",
    },
    intro: {
      title: (
        <>
          HEY! GUSTAVO <br />P<LazyImage src="/imgs/eu.png" alt="Gustavo Pontes" notLazy={true} />
          NTES HERE
        </>
      ),
      description: (
        <>
          Front-End Developer passionate about making the web more beautiful and accessible. Focused
          on e-commerce projects and institutional websites with impeccable SEO, I also create
          engaging digital experiences that combine design and functionality.{" "}
        </>
      ),
    },
    services: {
      title: (
        <>
          <div>
            My <span />
          </div>
          <br />
          <div>
            <span />
            Services
          </div>
        </>
      ),
      showDescription: {
        first: "your",
        second: "business",
        third: "your style",
      },
      description: [<>shop</>, <>web site</>, <>result</>],
      list: [
        {
          title: "E-commerce",
          description: (
            <>
              I create amazing online stores that captivate customers and make shopping easy. From
              setting up the shopping cart to integrating secure payment methods, I am committed to
              providing a seamless shopping experience for your customers.
            </>
          ),
          icon: IconEcommerce,
        },
        {
          title: "Web development",
          description: (
            <>
              As a web developer, I turn ideas into digital reality. My passion is creating
              functional, responsive, and visually appealing websites. Whether it’s a corporate
              website or a complex platform, I’m ready to tackle any challenge.
            </>
          ),
          icon: IconWebDevelopment,
        },
        {
          title: "SEO",
          description: (
            <>
              As an SEO specialist, I optimize your website to be easily found by search engines.
              From keyword research to creating relevant content, I am focused on increasing your
              online visibility and attracting more qualified traffic.
            </>
          ),
          icon: IconSEO,
        },
      ],
    },
    works: {
      title: "works",
      projects: [
        {
          link: {
            href: "https://www.altogiro.com.br",
            target: "_blank",
            title: "Alto Giro",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/altogiro.png",
            alt: "Alto Giro",
          },
          technology: ["React", "Jest", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://www.ene2ese.com.br",
            target: "_blank",
            title: "Ene2ese",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/ene2ese.png",
            alt: "Ene2ese",
          },
          technology: ["Vanilla JS", "Gulp", "scss", "vtex"],
        },
        {
          link: {
            href: "https://www.pantaspaladar.com.br",
            target: "_blank",
            title: "Pantas Paladar",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/pantaspaladar.png",
            alt: "Pantas Paladar",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "https://www.farmrio.com.br",
            target: "_blank",
            title: "Farm Rio",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/farmrio.png",
            alt: "Farm Rio",
          },
          technology: ["react", "styled componentes", "Gulp", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://www.bateriasgalileu.com.br",
            target: "_blank",
            title: "Baterias Galileu",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/bateriasgalileu.png",
            alt: "Baterias Galileu",
          },
          technology: ["next", "styled componentes", "react"],
        },
        {
          link: {
            href: "https://www.jeansclub.com.br",
            target: "_blank",
            title: "Jeans Club",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/jeansclub.png",
            alt: "Jeans Club",
          },
          technology: ["React", "Jest", "scss", "vtex io"],
        },
        {
          link: {
            href: "https://libercomunicacaovisual.com.br",
            target: "_blank",
            title: "Liber Comunicação Visual",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/libercomunicacaovisual.png",
            alt: "Liber Comunicação Visual",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "http://bubowl.com.br",
            target: "_blank",
            title: "bubowl",
          },
          img: {
            src: "/imgs/works/bubowl.png",
            alt: "bubowl",
          },
          technology: ["Vanilla JS", "Gulp", "scss"],
        },
        {
          link: {
            href: "https://www.shopdoscabelos.com.br",
            target: "_blank",
            title: "Shop dos cabelos",
            rel: "nofollow noreferrer noopener",
          },
          img: {
            src: "/imgs/works/shopdoscabelos.png",
            alt: "Shop dos cabelos",
          },
          technology: ["React", "scss", "vtex io"],
        },
      ],
    },
    contact: {
      title: (
        <>
          Let’s Work <span>Together?</span>
        </>
      ),
      voice: "Talk to me",
      social: {
        title: "SOCIALS",
        links: [
          {
            href: "mailto:gustavo.4dev@gmail.com",
            title: "gustavo.4dev@gmail.com",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.linkedin.com/in/gustavo-pontes-aa8219287/",
            title: "linkedin",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.instagram.com/off.gu/",
            title: "instagram",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://github.com/GustaDev00",
            title: "github",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.youtube.com/channel/UCJSZjUFJoVeKgAF2zJ6HPgg",
            title: "youtube",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
          {
            href: "https://www.awwwards.com/gustavo-felipe/",
            title: "awwwards",
            target: "_blank",
            rel: "nofollow noreferrer noopener",
          },
        ],
      },
    },
  },
};

export default content;
