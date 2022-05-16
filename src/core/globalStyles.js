import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif; 
   }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
  }
`;
