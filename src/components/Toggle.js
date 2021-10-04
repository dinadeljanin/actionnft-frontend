import React from 'react'
import styled from 'styled-components'
import { AnimateSharedLayout, motion } from 'framer-motion'

const Wrap = styled.div`
  width: 325px;
  margin: 0 auto 1em;
  align-items: center;
  display: flex;
  justify-content: space-around;
`

const TabStyled = styled.div`
  display: grid;
  place-items: center;
  width: fit-content;
  margin: 0.5em;
  text-align: center;
  cursor: pointer;
  position: relative;
  div {
    width: 100%;
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05),
      4px 4px 16px 0 rgba(0, 0, 0, 0.1);
  }
  span {
    color: #000;
    transition: ease 200ms color;
    z-index: 1;
    padding: 0.75em;
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 600;
  }
`

const Tab = ({ label, idx, selectedTab, toggleTab }) => {
  return (
    <TabStyled
      key={label}
      onClick={toggleTab}>
      <span>{label}</span>
      {selectedTab === idx && (
        <motion.div
          layoutId='tab'
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 50,
          }}
        />
      )}
    </TabStyled>
  )
}

const Toggle = ({selectedTab, toggleTab}) => {
  const labels = ['Common', 'Rare']
  return (
    <AnimateSharedLayout type='crossfade'>
      <Wrap>
        {labels.map((label, idx) => {
          return (
            <Tab
              key={label}
              label={label}
              selectedTab={selectedTab}
              toggleTab={() => toggleTab(idx)}
              idx={idx}
            />
          )
        })}
      </Wrap>
    </AnimateSharedLayout>
  )
}

export default Toggle
