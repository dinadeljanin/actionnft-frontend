import React, { useState } from "react";
import Toggle from '../../components/Toggle'
import Feature from '../../components/Feature'

import { useEthersProvider } from "contexts/EthersContext";
import MintCommonComp from "components/Mint/MintCommonComp";
import MintRareComp from "components/Mint/MintRareComp";

export async function getABI(address, networkId) {
  const resp = await import(`artifacts/deployments/${networkId}/${address}.json`);
  return resp;
}

const Main = () => {
  const { account } = useEthersProvider();

  const [tabValue, setTabValue] = useState(0);

  return (
    <main>
      {account && (
        <form>
          <Toggle
            selectedTab={tabValue}
            toggleTab={setTabValue}
          />
          {tabValue === 0 ? (
            <MintCommonComp />
          ):(
            <MintRareComp />
          )}
        </form>
      )}
      <Feature />
    </main>
  );
};

export default Main;
