import type { AppProps } from "next/app";
import { ModalContextProvider } from "@/lib/contexts/ModalContext";
import { Layout } from "@/components";
import "@/styles/globals.css";

import { Roboto, Nunito } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <div className={`${roboto.className} ${nunito.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ModalContextProvider>
  );
}
