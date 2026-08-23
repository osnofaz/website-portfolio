import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --deep-dark: #1E1E1E;
    --white : white;
    --black: black;
    --fs-xs: clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem);
    --fs-sm: clamp(0.875rem, 0.83rem + 0.25vw, 1rem);
    --fs-base: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
    --fs-md: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
    --fs-lg: clamp(1.75rem, 1.4rem + 1.75vw, 2.25rem);
    --fs-xl: clamp(2.5rem, 1.8rem + 3.5vw, 3.5rem);
  }
  html{
   background-color: var(--dark-background);
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

`;
export default GlobalStyles;
