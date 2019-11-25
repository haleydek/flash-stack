import React from 'react';
import styled from 'styled-components/macro';

const Logo = () => {
    return (
        <StyledLogo
            src='https://i.imgur.com/3D4rwgS.jpg'
            alt='logo'
        />
    )
}

export default Logo;

const StyledLogo = styled.img`
    float: left;

    @media only screen and (max-width: 767px) {
        width: 70px;
      }
    
    @media only screen and (min-width: 768px) {
        width: 80px
    }
    
`;