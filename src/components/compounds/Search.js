import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AutoComplete from '../functional/AutoComplete'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Container = styled.div`
    position: relative;
`

const StyledDiv = styled.div`
    align-items: center;
    border-radius: 1em;
    border-bottom-left-radius: ${props => (props.isQuery ? '0' : 'undefined')}
    border-bottom-right-radius: ${props => (props.isQuery ? '0' : 'undefined')}
    box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

const Search = ({ handleClear, handleSelectQuestion, ...props }) => (
    <Container>
        <StyledDiv isQuery={props.value}>
            <Input {...props} />
            {props.value ? (
                <Button onClick={handleClear}>Clear</Button>
            ) : (
                'Search'
            )}
        </StyledDiv>
        <AutoComplete
            handleSelectQuestion={handleSelectQuestion}
            searchQuery={props.value}
        />
    </Container>
)

Search.propTypes = {
    handleClear: PropTypes.func.isRequired
}

export default Search
