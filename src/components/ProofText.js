import React from 'react'
import styled from 'styled-components'

const Anchor = styled.a`
    background: #ddd;
    border-radius: 0.125em;
    padding: 0.25em 0.5em;

    &:not(:last-of-type) {
        margin-right: 0.5em;
    }

    &:hover {
        background: #f1f1f1;
    }
`

const A = ({ children, ...props }) => <Anchor {...props}>{children}</Anchor>

const ListItem = styled.li`
    margin-top: 1em;
    &:not(:last-of-type) {
        margin-top: 2em;
    }
`

const Li = ({ children, ...props }) => (
    <ListItem {...props}>{children}</ListItem>
)

export { A, Li }
