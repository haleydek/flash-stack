import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Title from './title';
import Logo from './logo';

class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Title />
                <Logo />
            </HeaderWrapper>
        )
    }
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
`;