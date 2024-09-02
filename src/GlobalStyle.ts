import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  max-width: 1240px;

  margin: 0 auto;
  padding: 0 15px;
`;

export const theme = {
  colors: {
    rootBodyColor: "rgb(238, 238, 238)",
    addBodyColor: "#ffffff",
    mainBlack: "#121417",
  },
};

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
font-family: 'Roboto', sans-serif;
line-height: 1.5;
 background-color: ${({ theme: { colors } }) => colors.addBodyColor};

}

h1,
h2, 
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
    text-decoration: none;
       cursor: pointer;
}

button {
    font-family: inherit;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
}

`;
