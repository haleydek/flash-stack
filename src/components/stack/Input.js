import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import styled from 'styled-components/macro';

class StackInput extends Component {
    constructor() {
        super();
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});
        this.setEditor = (editor) => {
            this.editor = editor
        };
        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
        // Applies styles when key shortcuts are pressed (i.e. Bold text = CMD + B)
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        // Converts current line or selection to an unordered (bulleted) list
        this.toggleBulletPoints = this.toggleBulletPoints.bind(this);
    }

    componentDidMount() {
        this.focusEditor();
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) { this.onChange(newState) };
    }

    toggleBulletPoints() {
        // https://github.com/facebook/draft-js/blob/master/examples/draft-0-10-0/rich/rich.html
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // TO DO: parse into 'cards' with 'front' and 'back' content
        // cards: {
        //    0: { front: 'front text', back: 'back text' }
        // }
        console.log(this.state.editorState.getCurrentContent())
    }

    render() {
        return (
            <StyledStackInput>
                <button onClick={this.toggleBulletPoints}>Bulleted List</button>
                <StyledEditor onClick={this.focusEditor}>
                    <Editor
                        ref={this.setEditor}
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                </StyledEditor>
                <button onClick={this.handleSubmit}>Create Stack</button>
            </StyledStackInput>
        );
    }
};

export default StackInput;

const StyledStackInput = styled.div`
    margin: 0 auto;

    @media only screen and (max-width: 767px) {
        width: 260px;
    }

    @media only screen and (min-width: 768px) {
        width: 500px;
    }
`

const StyledEditor = styled.div`
    border-radius: 25px;
    border: 3px solid ${props => props.theme.primaryLight};
    padding: 20px;
    font-size: 16px;
    resize: none;
    margin: 0 auto;

    @media only screen and (max-width: 767px) {
        height: 260px;
    }

    @media only screen and (min-width: 768px) {
        height: 500px;
    }
`
