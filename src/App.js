import React from 'react';
import styled from 'styled-components/macro';

function App() {
  return (
    <AppWrapper>
      <h1>Hello World</h1>
    </AppWrapper>
  );
}

export default App;

const font = "Roboto, sans-serif";

const device = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const AppWrapper = styled.div`
  box-sizing: border-box;
  font-family: ${font};
  overflow: hidden;

  @media only screen and (min-width: ${device.tablet}) {
    
  }

  @media only screen and (min-width: ${})
`;