import React from 'react'

import { wscByNumber, wscQuestions } from '../wsc'
import * as ProofText from './ProofText'
import Input from './atoms/Input'
import Search from './compounds/Search'

class App extends React.Component {
    state = {
        currentQuestion: 0,
        searchQuery: ''
    }
    render() {
        return (
            <div className="App">
                <h1>Ask a question</h1>
                <Search
                    handleClear={this.handleClear}
                    name="searchQuery"
                    onChange={this.handleInputChange}
                    value={this.state.searchQuery}
                />
                {this.renderAutoComplete()}
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
                    <h1>{data.question}</h1>
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
