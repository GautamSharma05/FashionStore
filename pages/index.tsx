import type { NextPage } from "next";
import Head from "next/head";
import Slider from "./components/Slider";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SharmaStore - India's Largest Fashion Store </title>
        <meta name="description" content="India's Largest Fashion Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
    </>
  );
};

export default Home;
