import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import StackForm from './components/stack/Form';


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header/>
          <PageWrapper>
            <PageInner>
              <Route exact path="/new" component={StackForm} />
            </PageInner>
          </PageWrapper>
          <Footer/>
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const theme = {
  primary: '#3C435D',
  secondary: '#E8F79A',
  primaryLight: '#EBECEE',
  seconaryDark: '#DDF36B',
  font: 'Roboto, sans-serif',
  smallFont: '12px'
}

const AppWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  overflow: hidden;
  display: block;
  font-family: ${props => props.theme.font};
  font-size: 16px;

  @media only screen and (max-width: 767px) {
    h1 { font-size: 2em }
  }

  @media only screen and (min-width: 768px) {
    h1 { font-size: 2.5em }
  }
`;

const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

const PageInner = styled.div`

  @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;
  }

  @media only screen and (min-width: 768px) {
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      margin: 0 auto;
  }
`;