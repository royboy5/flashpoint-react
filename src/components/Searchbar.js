import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@blueprintjs/core'
import Autosuggest from 'react-autosuggest'

import {
  getSuggestions,
  getSuggestionValue,
  renderSuggestion
} from './Searchbar/autocomplete'

class Searchbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    )
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    )
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChange (event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    })
  }

  onChangeHandler (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { value, suggestions } = this.state

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search Reddit...',
      value,
      onChange: this.onChange
    }

    return (
      <div className='searchbar bp3-input-group'>
        <span className='bp3-icon bp3-icon-search' />
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          className='bp3-input'
        />
        <Button
          icon='arrow-right'
          onClick={() => this.props.searchTerm(this.state.value, null, false)}
          minimal
        />
      </div>
    )
  }
}

Searchbar.propTypes = {
  searchTerm: PropTypes.func.isRequired
}

export default Searchbar
