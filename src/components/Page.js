import React from 'react';
import styled from 'styled-components/macro';

const Page = () => {
    return <StyledPage><StyledPageSection>Hello World</StyledPageSection></StyledPage>
}

export default Page;

const StyledPage = styled.div`

@media only screen and (max-width: 767px) {
    position: relative;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    background-color: pink;
  }
`;

const StyledPageSection = styled.div`

@media only screen and (max-width: 767px) {
    position: relative;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%
  }

  @media only screen and (min-width: 768px) {
    display: block;
    line-height: 0px;
    position: relative;
    max-width: 1440px;
    background-color: pink;
  }
`;
