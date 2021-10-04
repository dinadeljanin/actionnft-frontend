import React from 'react'
import styled from 'styled-components'

import { AnchorLink as Link, ImageLink } from './shared/Links'

const Wrap = styled.section`
  border: 1px solid red;
`

const Feature = () => {
  return (
    <Wrap>
      <strong>'The War on Crypto'</strong> features award-winning American artist <Link route='https://www.rebeccahendin.com/'>Rebecca Hendin</Link>, whose art is regularly featured in BBC, and The Guardian. This limited series reflects the current state of US politics and their overarching stranglehold on crypto innovation.
      <ImageLink rout='https://www.rebeccahendin.com/' img='https://pbs.twimg.com/media/E_f3Cr0XsAgtOkR?format=jpg&name=small' />
      We are <Link route='https://pac.xyz/'>PAC DAO</Link> and we're bringing <Link route='https://pacdao.substack.com/p/an-introduction-to-pac-dao'>political activism on chain</Link>. We have a mission to <Link route='https://pacdao.substack.com/p/the-renaissance-of-expression'>effect positive change</Link> toward crypto.

      <br/><br/>
      All funds from the sale of the NFT go to politicians who provably act to support crypto.  These funds allow us to
     <Link route='https://pacdao.substack.com/p/the-art-of-applying-force'> apply leverage</Link> toward our goal of removing crypto from the infrastructure bill.
      <br/><br/>
      Only five top bidders will get to keep the rare version of this NFT.  All others can claim a 100% refund.
    </Wrap>
  )
}

export default Feature
