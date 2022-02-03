import type { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyled.js";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}

export default MyApp;
