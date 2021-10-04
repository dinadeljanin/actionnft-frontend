import React from 'react'
import styled from 'styled-components'

import { LINKS } from '../../constants/links.js'
import {IconLink as Link} from '../shared/Links'

const Disclaimer = styled.p`
  grid-area: disclaimer;
  width: 100%;
  padding: 1em 0 2em;
  text-align: center;
  border-top: .75px solid black;
`

const Copyright = styled.p`
  grid-area: copyright;
  font-weight: 600;
  @media (min-width: 768px) {
    place-self: start;
  }
`

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: iconlinks;
  @media (min-width: 768px) {
    place-self: end;
  }
`

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Copyright>Copyright &copy; {year} PAC DAO</Copyright>
      <LinkSection>
        {LINKS.map((link, idx) =>
          <Link linkData={link} key={`Icon link to ${link.title}`} />
        )}
      </LinkSection>
      <Disclaimer>
        People Advocating for Crypto is a grassroots issue based activism DAO dedicated to furthering crypto adoption worldwide. PAC is not a Political Action Committee, and nothing expressed in PAC’s website or other public forums shall be construed as such. Further, this website and any other public PAC forums, including content such as proposals supported by PAC, the PAC Pro-Crypto Scorecard, and Bills and Campaigns discussed by PAC, are for informational purposes only. Any NFTs obtained by supporters of PAC are “as is” and without warranties of any kind. PAC is not liable for any harm caused by participation therein, or by obtaining an NFT. By obtaining an NFT, you agree that you are not obtaining a security or investment instrument, you have undertaken your own review of laws applicable to you in your jurisdiction and confirm that your action is permissible under such applicable laws and you are obtaining an NFT for your own account without intent to distribute the NFT to third parties.
      </Disclaimer>
    </footer>
  )
}

export default Footer
