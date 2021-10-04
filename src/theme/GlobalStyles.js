import { createGlobalStyle } from 'styled-components';

// export const color = lightTheme ? 'white' : '#061a44';
// export const color2 = lightTheme ? 'white' : '#010e2c';
// export const color3 = lightTheme ? '#09f010' : '#42ff3a';

const GlobalStyles = createGlobalStyle`
  header, footer {
    display: grid;
    grid-gap: 1em 0;
    grid-template-columns: auto;
    justify-content: center;
    height: fit-content;
    place-items: center;
    width: 80%;
    margin: 0 auto;
    @media (min-width: 768px) {
      align-items: center;
      grid-gap: 2em 0;
      grid-template-columns: repeat(2, auto);
      justify-content: space-between;
    }
  }

  header {
    padding-top: 2em;
    grid-template-areas:
      'banner'
      'brand'
      'connection';
    @media (min-width: 768px) {
      grid-template-areas:
      'banner banner'
      'brand connection';
    }
  }

  footer {
    grid-template-areas:
      'iconlinks'
      'copyright'
      'disclaimer';
    @media (min-width: 768px) {
      grid-template-areas:
      'copyright iconlinks'
      'disclaimer disclaimer';
    }
  }

  main {
    margin: 2em auto;
    width: 80%;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  a {
    color: #000;
    font-weight: 600;
  }

`

export default GlobalStyles;
