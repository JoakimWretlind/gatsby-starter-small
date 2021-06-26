import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    text-decoration: none;
  }
    
  body {
    box-sizing: border-box;
    font-family: 'lato', sans-serif;
  }
  
  ul, li {
    list-style: none;
  }
`;