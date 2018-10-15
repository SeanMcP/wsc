import React from 'react'
import ReactDOM from 'react-dom'

import { wscQuestions } from './wsc'
import './styles.css'

class App extends React.Component {
    state = {
        currentQuestion: 0,
        searchQuery: ''
    }
    render() {
        return (
            <div className="App">
                <h1>Current question: {this.state.currentQuestion}</h1>
                <input
                    value={this.state.searchQuery}
                    name="searchQuery"
                    onChange={this.handleInputChange}
                />
                {this.renderAutoComplete()}
            </div>
        )
    }

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
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
