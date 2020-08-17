import React from 'react';
import styled from 'styled-components/macro';

const FooterContent = () => {
    return (
        <StyledFooterContent>
            © {new Date().getFullYear()} HALEY DEKEYSER
        </StyledFooterContent>
    )
}

export default FooterContent;

const StyledFooterContent = styled.div`
    text-align: center;
    color: ${props => props.theme.primaryLight};
    padding: 1rem;
`;