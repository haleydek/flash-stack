import React from 'react';
import styled from 'styled-components/macro';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent />
        </FooterWrapper>
    )
}

export default Footer;

const FooterWrapper = styled.div`
    position: absolute;
    display: inline-block;
    width: 100%;
    bottom: 0;
    clear: both;

    background-color: ${props => props.theme.primary};

    text-align: center;
    color: ${props => props.theme.primaryLight};
    font-size: ${props => props.theme.smallFont};
`;