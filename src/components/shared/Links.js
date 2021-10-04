import React from 'react'
import styled from 'styled-components'

const IconLinkStyled = styled.a`
  margin: 0 7px;
  display: grid;
  place-items: center;
  > img {
    width: auto;
    height: 20px;
    display: block;
  }
`

const ImageLinkStyled = styled(IconLinkStyled)`
  > img {
    width: auto;
    height: 60px;
  }
`


export const AnchorLink = ({route, title}) => {
  return (
    <a
      href={route}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      >
      {title}
    </a>
  )
}

export const IconLink = ({linkData}) => {
  return (
    <IconLinkStyled
      target="_blank"
      rel="noopener noreferrer"
      href={linkData.route}
      title={linkData.title}>
        <img
          width="600"
          height="400"
          src={linkData.icon}
          alt={linkData.title}
        />
      </IconLinkStyled>
  )
}

export const ImageLink = ({route, img, title}) => {
  return (
    <ImageLinkStyled
      target="_blank"
      rel="noopener noreferrer"
      href={route}
      title={title}
      >
        <img src={img} alt={title} />
    </ImageLinkStyled>
  )
}
