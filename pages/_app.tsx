import type { AppProps } from "next/app";

export default function Application({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
