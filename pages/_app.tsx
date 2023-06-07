import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Layout from "../components/Layout";
import React, { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
