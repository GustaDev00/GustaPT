import "styled-components";

export const theme = {
  color: {
    cultured: "#FAF9F6",
    gunmetal: "#2D2F39",
    darkBlueGray: "#616B8E",
    davysGrey: "#555863",
    violetBlue: "#415DB8",
    royalBlue: "#4F72E3",
    cornflowerBlue: "#4F75ED",
    majorelleBlue: "#5C4FE3",
    liberty: "#5C4FE3",
    white: "#FFFFFF",
    black: "#000000",
  },
  size: {
    size12rem: "12rem",
    size10rem: "10rem",
    size8rem: "8rem",
    size6rem: "6rem",
    size4_8rem: "4.8rem",
    size4rem: "4rem",
    size3_8rem: "3.8rem",
    size3rem: "3rem",
    size2_5rem: "2.5rem",
    size2rem: "2rem",
    size1_8rem: "1.8rem",
    size1_6rem: "1.6rem",
    size1_4rem: "1.4rem",
    size1_2rem: "1.2rem",
  },
  weight: {
    weight700: 700,
    weight500: 500,
    weight400: 400,
  },
  viewport: {
    mobile: {
      width: "599px",
    },
    tablet: {
      width: "768px",
    },
    desktop1024: {
      width: "1024px",
    },
    desktop1280: {
      width: "1280px",
    },
    desktop1440: {
      width: "1440px",
      height: "900px",
    },
    desktop1920: {
      width: "1920px",
      height: "1080px",
    },
    desktop2560: {
      width: "2560px",
      height: "1440px",
    },
  },
};

export type ColorFamily = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ColorFamily {}
}
