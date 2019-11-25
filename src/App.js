import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Header from './components/header/header';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header/>
        <p>Hello World</p>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const font = "Roboto, sans-serif";

const AppWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  font-family: ${font};
  font-size: 16px;

  @media only screen and (max-width: 767px) {
    h1 { font-size: 2em }
  }

  @media only screen and (min-width: 768px) {
    h1 { font-size: 2.5em }
  }
`;

const theme = {
  primary: '#3C435D',
  secondary: '#E8F79A'
}