import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as Icon from 'react-feather'
import { Transition } from 'react-spring'

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
    transition: all 100ms ease-in-out;
`

const ButtonContainer = styled.div`
    align-items: center;
    color: #999;
    display: flex;
    justify-content: center;
    padding: 0 1.5em;
    position: relative;
`

const Search = ({ handleClear, handleSelectQuestion, ...props }) => (
    <Container>
        <StyledDiv isQuery={props.value}>
            <Input {...props} />
            <ButtonContainer>
                <Transition
                    from={{ position: 'absolute', opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {props.value
                        ? styles => (
                              <div style={styles}>
                                  <Icon.Delete onClick={handleClear} />
                              </div>
                          )
                        : styles => (
                              <div style={styles}>
                                  <Icon.Search />
                              </div>
                          )}
                </Transition>
                {/*
                {props.value ? (
                    <Icon.Delete onClick={handleClear} />
                ) : (
                    <Icon.Search />
                )}
                */}
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
