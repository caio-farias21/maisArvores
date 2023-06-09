import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap" as any);
  }, []);
  return (
    <>
      <Head>
        <title>Mais Árvores</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/logo.svg"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
