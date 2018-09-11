import { combineReducers } from 'redux'
import articlesReducer from './articles'
import currentArticleReducer from './current'

const rootReducer = combineReducers({
  articles: articlesReducer,
  current: currentArticleReducer
})

export default rootReducer
