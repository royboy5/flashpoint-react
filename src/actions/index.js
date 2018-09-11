import axios from 'axios'

export const SEARCH_TOPICS = 'search_topics'
export const CURRENT_ARTICLE = 'current_article'

const ROOT_URL = 'https://www.reddit.com'
const LIMIT = 10
// const SHOW_ALL = `restrict_sr=1`

export const searchTopics = (
  count,
  query,
  queryFrom,
  direction,
  showAll
) => async dispatch => {
  const search = query.toLowerCase().replace(/ /g, '+')
  let URL = `${ROOT_URL}/search.json?q=${search}&limit=${LIMIT}&count=${count}`

  if (direction === 'prev') {
    if (count > 0) {
      URL = `${URL}&before=${queryFrom}`
    }
  }

  if (direction === 'next') {
    URL = `${URL}&after=${queryFrom}`
  }

  console.log(URL, 'action')

  const res = await axios.get(URL)

  dispatch({
    type: SEARCH_TOPICS,
    payload: {
      query,
      count,
      queryFrom,
      showAll,
      data: res.data.data
    }
  })
}

export const currentArticle = (current) => dispatch => {
  dispatch({
    type: CURRENT_ARTICLE,
    payload: current
  })
}
