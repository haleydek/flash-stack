import React from 'react';
import styled from 'styled-components/macro';

const Page = () => {
    return <StyledPage><InnerPage><p>Hello World</p><p>Hello World</p><p>Hello World</p></InnerPage></StyledPage>
}

export default Page;

const StyledPage = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;

`;

const InnerPage = styled.div`

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