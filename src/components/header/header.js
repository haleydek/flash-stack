import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Title from './Title';
import Logo from './Logo';

class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Logo />
                <Title />
            </HeaderWrapper>
        )
    }
}

export default Header;

const HeaderWrapper = styled.div`
    display: inline-block;
    clear: both;
    width: 100%;
    background-color: ${props => props.theme.primary};
    margin: 0;
    padding: 0;
    overflow: auto;
`;