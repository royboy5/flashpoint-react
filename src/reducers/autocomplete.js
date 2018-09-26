import { AUTOCOMPLETE_LIST } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case AUTOCOMPLETE_LIST:
      return [...action.payload]
    default:
      return state
  }
}
