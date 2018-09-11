import { CURRENT_ARTICLE } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case CURRENT_ARTICLE:
      return { ...action.payload }
    default:
      return state
  }
}
