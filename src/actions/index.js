import axios from 'axios'

export const SEARCH_TOPICS = 'search_topics'

const ROOT_URL = 'https://www.reddit.com'
const LIMIT = 10
const SHOW_ALL = `restrict_sr=1`

export const searchTopics = (query, queryFrom, showAll) => async dispatch => {
  const search = query.toLowerCase().replace(/ /g, '+')
  let URL = `${ROOT_URL}/search.json?q=${search}`

  if (showAll) {
    URL = `${URL}&${SHOW_ALL}`
  } else {
    URL = `${URL}&limit=${LIMIT}`
  }

  console.log(URL, 'action')

  const res = await axios.get(URL)

  dispatch({
    type: SEARCH_TOPICS,
    payload: {
      query,
      queryFrom,
      showAll,
      data: res.data.data
    }
  })
}
