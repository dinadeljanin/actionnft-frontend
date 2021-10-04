import React from 'react'
import styled from 'styled-components'

import metamask from '../../assets/icons/metamask-fox.svg'

const ButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 8px 15px;
  height: 50px;
  width: fit-content;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
  font-weight: 600;
`

const MetaMaskButtonStyled = styled.a`
  padding: 8px 15px;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #000;
  border-radius: 4px;
  width: fit-content;
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 600;
  > img {
    height: 25px;
    margin-right: 7px;
  }

`

export const Button = ({onClick, children}) => {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

export const MetaMaskButton = () => {
  return (
    <MetaMaskButtonStyled target="_blank" rel="noopener noreferrer" href="https://metamask.io/">
        <img src={metamask} alt="MetaMask Fox"/>
        <p>Install MetaMask</p>
    </MetaMaskButtonStyled>
  )
}
