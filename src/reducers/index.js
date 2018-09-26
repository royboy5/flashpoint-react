import { combineReducers } from 'redux'
import articlesReducer from './articles'
import currentArticleReducer from './current'
import autocompleteReducer from './autocomplete'

const rootReducer = combineReducers({
  articles: articlesReducer,
  current: currentArticleReducer,
  autocomplete: autocompleteReducer
})

export default rootReducer
