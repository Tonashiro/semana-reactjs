import React from "react";
import type { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyled.js";
import { ProjectProvider } from "../context/project";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProjectProvider>
        <Component {...pageProps} />
        <GlobalStyled />
      </ProjectProvider>
    </>
  );
}

export default MyApp;
