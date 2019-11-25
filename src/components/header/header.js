import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Title from './title';
import Logo from './logo';

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
    width: 100%;
    background-color: ${props => props.theme.primary};
    clear: both;
`;