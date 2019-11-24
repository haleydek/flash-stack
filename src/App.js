import React from 'react';
import styled from 'styled-components/macro';
import Header from './components/header/header';


function App() {
  return (
    <AppWrapper>
      <Header />
      <h1>Hello World</h1>
    </AppWrapper>
  );
}

export default App;

const font = "Roboto, sans-serif";

const AppWrapper = styled.div`
  box-sizing: border-box;
  font-family: ${font};
  overflow: hidden;
  display: grid;

  // @media only screen and (max-width: 600px) {
    
  // }

  // @media only screen and (min-width: 600px) {

  // }

  // @media only screen and (min-width: 768px) {

  // }

  // @media only screen and (min-width: 992px) {

  // }

  // @media only screen and (min-width: 1200px) {

  // }
`;