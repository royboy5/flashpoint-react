import React from 'react'

// // List of topics to autosuggest.
// const topics = [
//   {
//     name: 'Art'
//   },
//   {
//     name: 'Business'
//   },
//   {
//     name: 'Education'
//   },
//   {
//     name: 'Entertainment'
//   },
//   {
//     name: 'Gaming'
//   },
//   {
//     name: 'General'
//   },
//   {
//     name: 'Hobbies and Interests'
//   },
//   {
//     name: 'Law'
//   },
//   {
//     name: 'Lifestyle'
//   },
//   {
//     name: 'Locations'
//   },
//   {
//     name: 'Meta'
//   },
//   {
//     name: 'Music'
//   },
//   {
//     name: 'News and Politics'
//   },
//   {
//     name: 'Science'
//   },
//   {
//     name: 'Social Science and Humanities'
//   },
//   {
//     name: 'Sports'
//   },
//   {
//     name: 'Technology'
//   },
//   {
//     name: 'Travel'
//   },
//   {
//     name: 'Other'
//   }
// ]

// Teach Autosuggest how to calculate suggestions for any given input value.
export const getSuggestions = (value, list) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : list.filter(
      item =>
        item.data.display_name.toLowerCase().slice(0, inputLength) ===
          inputValue
    )
}

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
export const getSuggestionValue = suggestion => suggestion.data.display_name

// Render suggestions.
export const renderSuggestion = suggestion => (
  <div>{suggestion.data.display_name}</div>
)
