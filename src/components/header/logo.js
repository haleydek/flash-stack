import React from 'react';
import styled from 'styled-components/macro';

const Logo = () => {
    return (
        <StyledLogo>
            <img
                src='https://i.imgur.com/3D4rwgS.jpg'
                alt='logo'
            />
        </StyledLogo>
    )
}

export default Logo;

const StyledLogo = styled.div`

    @media only screen and (max-width: 600px) {
        img { width: 15%; height: auto; }
    }
  
    @media only screen and (min-width: 600px) {
        img { width: 15%; height: auto; }
    }
  
    @media only screen and (min-width: 768px) {
        img { width: 15%; height: auto; }
    }
  
    @media only screen and (min-width: 992px) {
        img { width: 15%; height: auto; }
    }
  
    @media only screen and (min-width: 1200px) {
        img { width: 15%; height: auto; }
    }
`;