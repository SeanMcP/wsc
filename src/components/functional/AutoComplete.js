import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { wscQuestions } from '../../wsc'

const StyledUl = styled.ul`
    background: white;
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    border-top: 1px solid #f1f1f1;
    left: 0;
    list-style: none;
    margin: 0;
    max-height: 50vh;
    overflow: scroll;
    padding: 0.5em;
    position: absolute;
    right: 0;
    top: 100%;
`

const StyledLi = styled.li`
    cursor: ${props => (props.link ? 'pointer' : 'default')};
    padding: 0.5em;

    &:hover {
        text-decoration: ${props => (props.link ? 'underline' : 'none')};
    }
`

const AutoComplete = ({ handleSelectQuestion, searchQuery }) => {
    if (searchQuery) {
        const match = wscQuestions.filter(q =>
            q.toLowerCase().includes(searchQuery.toLowerCase())
        )
        if (match) {
            const listItems = match.map((text, i) => {
                const index = wscQuestions.indexOf(text) + 1
                return (
                    <StyledLi
                        id={`footnote-${index}`}
                        key={index}
                        link
                        onClick={handleSelectQuestion(index)}
                    >
                        {text}
                    </StyledLi>
                )
            })
            return (
                <StyledUl>
                    {listItems.length ? (
                        listItems
                    ) : (
                        <StyledLi>No results found</StyledLi>
                    )}
                </StyledUl>
            )
        }
    }
    return null
}

AutoComplete.propTypes = {
    handleSelectQuestion: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired
}

export default AutoComplete
