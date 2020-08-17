import React from 'react';
// import { connect } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components/macro';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//import StackForm from './components/stack/Form';
import StackInput from './components/stack/Input';


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Header/>
          <PageWrapper>
            <PageInner>
              <Route exact path="/new" component={StackInput} />
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
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  clear: both;
`;

const PageInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
`;