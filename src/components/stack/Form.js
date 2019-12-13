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
                front: frontAndBack[0].trim(),
                back: frontAndBack[1].trim()
            };

            return card;
        })

        console.log(cards);

    }

    render (){
        return (
            <StyledStackForm onSubmit={this.handleSubmit}>
                <StyledTextArea value={this.state.notes} onChange={this.handleChange} />
                <input type='submit' value='Create Stack' />
            </StyledStackForm>
        )
    }
}

export default StackForm;

const StyledStackForm = styled.form`
    @media only screen and (max-width: 767px) {
        width: 260px;
    }

    @media only screen and (min-width: 768px) {
        width: 500px;
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    border-radius: 25px;
    border: 3px solid ${props => props.theme.primaryLight};
    padding: 20px;
    font-size: 16px;

    @media only screen and (max-width: 767px) {
        height: 156px;
    }

    @media only screen and (min-width: 768px) {
        height: 300px;
    }
`;