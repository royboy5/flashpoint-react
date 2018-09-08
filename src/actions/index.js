import axios from 'axios'

export const SEARCH_TOPICS = 'search_topics'

const ROOT_URL = 'https://pixabay.com/api/'

export async function searchTopics (query) {
  const search = query.replace(/ /g, '+')
  const req = await axios.get(`${ROOT_URL}&q=${search}`)

  return {
    type: SEARCH_TOPICS,
    payload: {
      data: req.data,
      query
    }
  }
}
