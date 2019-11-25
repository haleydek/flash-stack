import React from 'react';
import styled from 'styled-components/macro';

const Title = () => {
    return (
        <StyledTitle>Flash Stack</StyledTitle>
    )
}

export default Title;

const StyledTitle = styled.h1`
    margin: 1rem 2rem;
    color: ${props => props.theme.secondary};
    float: left;
`;