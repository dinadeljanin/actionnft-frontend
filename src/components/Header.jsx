import React, { useMemo } from "react";
import styled from 'styled-components'
import { useEthersProvider } from "../contexts/EthersContext";
import { abbrAddress } from "utils";
import { ImageLink as Brand } from './shared/Links'
import { Button, MetaMaskButton } from './shared/Buttons'
import pacDaoLogo from "assets/logo2x.png";

const OnboardingBanner = styled.div`
  width: 100%;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  padding: 1em;
  background-color: lightsalmon;
  border: 1px solid hsl(6, 93%, 63%);
  color: #000;
  margin: 0 auto;
  grid-area: banner;
`

const AccountContainer = styled.div`
  ${'' /* padding: 1em; */}
  border-radius: 7px;
  padding: 1em 2px;
  background-color: black;
  font-weight: 600;
  > p {
  color: #fff;
  padding-left: 1em;
  > span {
    background-color: #fff;
    color: #000;
    margin-left: 1em;
    padding: 1em;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  }

`

const Header = () => {
  const { chainId, provider, account, connect, chainName } = useEthersProvider();

  const abbrAccount = useMemo(() => {
    if (account) {
      return abbrAddress(account);
    }
  }, [account]);

  const headerConnection = () => {
    switch(true) {
      case (provider && account !== null):
        return (
          <AccountContainer>
            <p>{chainName.toUpperCase()} <span>{abbrAccount}</span></p>
          </AccountContainer>
        )
      case (provider && !account):
        return (
          <Button onClick={connect} type="submit">
            Connect Your Wallet
          </Button>
        )
      case (!provider):
        return <MetaMaskButton />
      default:
        break
    }
  }

  return (
    <header>
      {provider && chainId !== 1 && (
        <OnboardingBanner container justifyContent="center">
          <p>Please switch to Ethereum Mainnet.</p>
        </OnboardingBanner>
      )}
      <Brand
        img={pacDaoLogo}
        route='https://www.pac.xyz/'
        title='PAC Crypto Activism'
       />
       {headerConnection()}
    </header>
  )
}

export default Header
