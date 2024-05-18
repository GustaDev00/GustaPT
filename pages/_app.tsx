import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { LanguageProvider } from "@/context/language";

import GSAPInitializer from "@/common/atoms/GSAPInitializer";
import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GSAPInitializer />
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
