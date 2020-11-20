import { createGlobalStyle } from 'styled-components';

import CaveatFont from '../assets/fonts/Caveat-Bold.ttf';
import RobotoSlabFont from '../assets/fonts/RobotoSlab-Medium.ttf';
import UbuntuFont from '../assets/fonts/Ubuntu-Bold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Caveat';
    src: url(${CaveatFont});
  }

  @font-face {
    font-family: 'RobotoSlab';
    src: url(${RobotoSlabFont});
  }

  @font-face {
    font-family: 'Ubuntu';
    src: url(${UbuntuFont});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'RobotoSlab', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Ubuntu';
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`;
