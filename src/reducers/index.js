import { combineReducers } from 'redux'
import articlesReducer from './articles'

const rootReducer = combineReducers({
  articles: articlesReducer
})

export default rootReducer
