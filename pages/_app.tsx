import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#6366f1"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
