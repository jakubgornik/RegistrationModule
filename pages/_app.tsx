import type { AppProps } from "next/app";
import FormContextProvider from "../store/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
  );
}
