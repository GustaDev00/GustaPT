import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { LanguageProvider } from "@/Context/language";

import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
