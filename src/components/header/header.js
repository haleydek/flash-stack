import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Title from './Title';
import Logo from './Logo';

class Header extends Component {
    render(){
        return(
            <StyledHeader>
                <HeaderWrapper>
                    <Logo />
                    <Title />
                </HeaderWrapper>
            </StyledHeader>
        )
    }
}

export default Header;

const StyledHeader = styled.div`
    width: 100%;
    background-color: ${props => props.theme.primary};
    margin: 0;
    padding: 0;
    overflow: auto;
`;

const HeaderWrapper = styled.div`
    display: inline-block;
    clear: both;
`;