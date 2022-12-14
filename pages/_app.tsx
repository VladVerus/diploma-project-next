import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/globals.scss";

import * as React from "react";

import {
  CacheProvider,
  EmotionCache,
} from "@emotion/react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import type { AppProps } from "next/app";
import Layout from "./components/Layout";
import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (
  props
) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
