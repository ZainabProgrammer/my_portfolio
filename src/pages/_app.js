import Header from "@/components/Header";
import Particle from "@/components/Particles";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zainab - Frontend Developer </title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, user-scalable=no"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Particle />
    </>
  );
}
