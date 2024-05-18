import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { mediaMaxWidth, viewportsBase } from "@/utils/media-query";

const { desktop1024, desktop1920, isMobileOrTabletVertical, mobileHorizontal } = viewportsBase;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "HelveticaNeue";
    src: url("/fonts/HelveticaNeue/HelveticaNeueBold.otf") format("otf");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueF";
    src: url("/fonts/HelveticaNeue/HelveticaNeueLight.otf") format("otf");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeue";
    src: url("/fonts/HelveticaNeue/HelveticaNeueMedium.otf") format("otf");
    font-weight: 300;
    font-style: normal;
  }

  * {
  font-family: "Helvetica Neue", "HelveticaNeue", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body, #__next {
    height: 100%;
  }

   html {
    font-size: calc(100vw / 2560 * 10);
    text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;

    @media (max-width: 1280px) and (orientation: portrait), 
      (max-width: 500px), 
      (max-height: 500px) {
        font-size: calc(100vw / 1280 * 10);
      
      @media (orientation: portrait) {
        font-size: calc(115vw / 1280 * 10);
      }
    }

    @media (max-width: 1280px) and (min-width: 500px) {
      font-size: calc(100vw / 1280 * 10);

      @media (orientation: portrait) {
        font-size: calc(130vw / 1280 * 10);
      }
    }

    @media (max-width: 500px), 
          (max-height: 500px) {
      font-size: calc(70vw / 414 * 10);
    }

    @media (max-height: 500px) and (orientation: landscape) {
      font-size: calc(50vw / 500 * 10);
    }

    /* @media (max-width: 1024px)  {
      font-size: calc(100vw / 1024 * 10);
      
    }

    @media (max-width: 1280px) and (orientation: portrait), 
      (max-width: 500px), 
      (max-height: 500px) {
      font-size: calc(100vw / 1280 * 10);
      
      @media (orientation: portrait) {
        font-size: calc(115vw / 1280 * 10);
      }
    }

    @media (max-width: 500px), 
          (max-height: 500px) {
      font-size: calc(80vw / 414 * 10);
    }

    @media (max-height: 500px) and (orientation: landscape) {
      font-size: calc(65vw / 500 * 10);
    } */
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
   
  body {
    overscroll-behavior: none;
    background: #f6f7fa;
  }
  
  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  
  input, textarea {
    appearance: none;
    border: none;
    border-radius: none;
    outline: none;
  }
`;

export default GlobalStyles;
