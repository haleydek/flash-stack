import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Page from './components/Page';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header/>
        <Page />
        <Footer/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const font = "Roboto, sans-serif";

const AppWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  overflow: hidden;
  display: block;
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
  secondary: '#E8F79A',
  primaryLight: '#EBECEE',
  seconaryDark: '#DDF36B',

  smallFont: '12px'
}