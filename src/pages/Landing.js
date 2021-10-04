import React from 'react'
import styled from 'styled-components'

import pacImageCommon from "../assets/hendlinCommon.jpg";
import { AnchorLink as Link } from '../components/shared/Links'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  > img {
    margin: 0 auto;
    width: 80%;
  }
  > p {
    text-align: center;
    padding: 1em 0;
  }
  @media (min-width: 768px) {
    width: 700px;
    > img {
      width: 450px;
      height: auto;
    }
  }
`

const Landing = () => {
  return (
    <Main>
      <img src={pacImageCommon} alt="PAC Crypto Activism NFT" />
      <p>
        <strong>'The War on Crypto'</strong> features award-winning American artist <Link route='https://www.rebeccahendin.com/' title='Rebecca Hendin' />, whose art is regularly featured in BBC, and The Guardian. This limited series reflects the current state of US politics and their overarching stranglehold on crypto innovation.
      </p>
      <p>
        All funds towards the Action NFT are used to incentivize politicians to advocate for crypto in DC.  Make your voice heard!
      </p>
      <p>
        Connect a Web3 Provider like MetaMask to learn more.
      </p>
    </Main>
  )
}

export default Landing
