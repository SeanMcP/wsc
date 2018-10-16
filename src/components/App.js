import React from 'react'
import styled from 'styled-components'

import { wscByNumber } from '../wsc'
import * as ProofText from './functional/ProofText'
import Search from './compounds/Search'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2em;
`

class App extends React.Component {
    state = {
        currentQuestion: 0,
        searchQuery: ''
    }
    render() {
        return (
            <StyledDiv>
                <Search
                    handleClear={this.handleClear}
                    handleSelectQuestion={this.handleSelectQuestion}
                    name="searchQuery"
                    onChange={this.handleInputChange}
                    placeholder="Ask a question"
                    value={this.state.searchQuery}
                />
                {this.renderCurrentQuestion()}
            </StyledDiv>
        )
    }

    handleClear = () => this.setState({ searchQuery: '' })

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSelectQuestion = num => () =>
        this.setState({
            currentQuestion: num,
            searchQuery: ''
        })

    renderCurrentQuestion = () => {
        const { currentQuestion } = this.state
        if (currentQuestion) {
            const data = wscByNumber[currentQuestion]
            return (
                <div>
                    <h2>{data.question}</h2>
                    <p>{data.answer}</p>
                    {this.renderProofTexts(data.proofTexts)}
                </div>
            )
        }
    }

    renderProofTexts = proofTexts => {
        if (proofTexts) {
            const output = []
            for (let i = 1; i <= Object.keys(proofTexts).length; i++) {
                output.push(
                    <ProofText.Li key={i}>
                        {this.renderScriptureLinks(proofTexts[i])}
                    </ProofText.Li>
                )
            }
            return <ol>{output}</ol>
        }
    }

    renderScriptureLinks = passages =>
        passages.map((passage, i) => (
            <ProofText.A href="#test" key={i}>
                {passage}
            </ProofText.A>
        ))
}

export default App
