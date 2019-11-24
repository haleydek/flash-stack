import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Title from './title';

class Header extends Component {
    render(){
        return(
            <HeaderWrapper>
                <Title />
            </HeaderWrapper>
        )
    }
}

export default Header;

const HeaderWrapper = styled.div`
    width: 100%;
`;