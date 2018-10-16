import React from 'react'

import { wscByNumber, wscQuestions } from '../wsc'
import * as ProofText from './ProofText'
import Search from './compounds/Search'

class App extends React.Component {
    state = {
        currentQuestion: 0,
        searchQuery: ''
    }
    render() {
        return (
            <div className="App">
                <Search
                    handleClear={this.handleClear}
                    handleSelectQuestion={this.handleSelectQuestion}
                    name="searchQuery"
                    onChange={this.handleInputChange}
                    placeholder="Ask a question"
                    value={this.state.searchQuery}
                />
                {this.renderCurrentQuestion()}
            </div>
        )
    }

    handleClear = () => this.setState({ searchQuery: '' })

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSelectQuestion = num => () =>
        this.setState({
            currentQuestion: num,
            searchQuery: ''
        })

    renderAutoComplete = () => {
        const { searchQuery } = this.state
        if (searchQuery) {
            const match = wscQuestions.filter(q =>
                q.toLowerCase().includes(searchQuery.toLowerCase())
            )
            if (match) {
                const listItems = match.map((text, i) => {
                    const index = wscQuestions.indexOf(text) + 1
                    return (
                        <li
                            id={`footnote-${index}`}
                            key={index}
                            onClick={this.handleSelectQuestion(index)}
                        >
                            {text}
                        </li>
                    )
                })
                return <ul>{listItems}</ul>
            }
        }
    }

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
