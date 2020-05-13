import { createGlobalStyle } from "styled-components";

import colors from "./colors";

/**
 * the reset styles come from normalize.css | github.com/necolas/normalize.css
 */

export const GlobalStyled = createGlobalStyle`
  @charset "UTF-8";
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
    display: block;
  }
  html {
    height: 100%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    }
  body {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    user-select: none;
    color: ${colors.black}
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
  iframe >  html {
    direction: rtl !important
  }

  img {
    border-radius: 0 !important;
    box-shadow: none !important;
  }
`;
