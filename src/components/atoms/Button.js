import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${props => props.backgroundColor};
    border: 0;
    color: ${props => props.color};
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;

    &:focus,
    &:active {
        outline: none;
    }
`

const Button = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
)

Button.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string
}

export default Button
