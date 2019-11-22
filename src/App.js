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

const AppWrapper = styled.div`
  box-sizing: border-box;
  font-family: ${font};
  overflow: hidden;
`;