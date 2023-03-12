import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.base[900]};
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    color: ${props => props.theme.colors.base['300']}
  }

  input, button {
    cursor: pointer;
    outline: none;
  }

  h1, h2, h3 {
    color: ${props => props.theme.colors.base['100']};
    line-height: 1.625rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.125rem;
  }
`