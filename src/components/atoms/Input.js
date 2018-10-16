import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
    border: 0;
    flex: 1;
    font-family: inherit;
    font-size: inherit;
    padding: 1em;

    &:focus {
        outline: none;
    }
`

const Input = props => <StyledInput {...props} />

Input.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
}

export default Input
