import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../atoms/Button'
import Input from '../atoms/Input'

const StyledDiv = styled.div`
    align-items: center;
    border-radius: 2em;
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

const Search = ({ handleClear, ...props }) => (
    <StyledDiv>
        <Input {...props} />
        {props.value ? <Button onClick={handleClear}>Clear</Button> : '🔍'}
    </StyledDiv>
)

Search.propTypes = {
    handleClear: PropTypes.func.isRequired
}

export default Search
