import { Layout } from "@/components";
import { ModalContextProvider } from "@/lib/contexts/ModalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
}
