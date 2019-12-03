import React, { Component } from 'react';
import styled from 'styled-components/macro';

class StackForm extends Component {
    state = {
        notes: ''
    }

    handleChange = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // parse string to create front and back of notecards
        // from notes pasted into textarea
    }

    render (){
        return (
            <StyledStackForm>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.notes} onChange={this.handleChange} />
                    <input type='submit' value='Create Stack' />
                </form>
            </StyledStackForm>
        )
    }
}

export default StackForm;

const StyledStackForm = styled.div`

`;