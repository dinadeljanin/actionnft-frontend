import React, { useMemo } from "react";
import { useEthersProvider } from "contexts/EthersContext";
import GlobalStyles from "theme/GlobalStyles"
import Main from "pages/main";
import Landing from "pages/Landing";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  const { chainId, account, provider } = useEthersProvider();

  const isCorrectChain = useMemo(() => {
    // TODO: change to correct network once it is ready
    return chainId !== null && chainId === 1;
  }, [chainId]);

  return (
    <>
      <GlobalStyles />
      <Header />
        {/* no judge me here please, send coffee */}
        {!provider ? <Landing /> : provider && !account && <Landing />  }
        {provider && isCorrectChain && <Main />}
      <Footer />
    </>
  );
}

export default App;
