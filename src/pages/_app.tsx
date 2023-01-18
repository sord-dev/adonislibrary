import type { AppProps } from "next/app";
import { ModalContextProvider } from "@/lib/contexts/ModalContext";
import { Layout } from "@/components";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
}
