import { SEARCH_TOPICS } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case SEARCH_TOPICS:
      return { ...state, [action.payload.query]: action.payload.data }
    default:
      return state
  }
}
