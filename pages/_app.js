import "../styles/globals.scss";
import Layout from "../components/Layout";
import { QuestionContextProvider } from "../context/QuestionContext";
import { GameContextProvider } from "../context/GameContext";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <QuestionContextProvider>
      <GameContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GameContextProvider>
    </QuestionContextProvider>
  );
}

export default MyApp;
