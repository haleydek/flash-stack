import React, { Component } from 'react';
import styled from 'styled-components/macro';

class StackForm extends Component {
    state = {
        notes: [],
        cards: []
    }

    handleChange = (event) => {
        this.setState({
            notes: event.target.value,
            cards: [...this.state.cards]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // parse string to create front and back of notecards
        // from notes pasted into textarea

        const notes = this.state.notes.split("\n");

        const cards = notes.map(note => {
            let frontAndBack = note.split("-");

            let card = {
                front: frontAndBack[0],
                back: frontAndBack[1]
            };

            return card;
        })

        console.log(cards);

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