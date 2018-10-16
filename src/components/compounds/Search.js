import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Icon from 'react-feather'

import AutoComplete from '../functional/AutoComplete'
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

const ButtonContainer = styled.div`
    padding: 0 1em;
`

const Search = ({ handleClear, handleSelectQuestion, ...props }) => (
    <Container>
        <StyledDiv isQuery={props.value}>
            <Input {...props} />
            <ButtonContainer>
                {props.value ? (
                    <Icon.Delete onClick={handleClear} />
                ) : (
                    <Icon.Search />
                )}
            </ButtonContainer>
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
