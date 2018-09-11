import React from 'react'
import PropTypes from 'prop-types'
import { ButtonGroup, Button } from '@blueprintjs/core'

import Searchbar from './Searchbar'

const SearchList = props => {
  const { clickHandler } = props
  // Architecture, Art, Business, Education, Entertainment, Gaming, General, Hobbies and
  // Interests, Law, Lifestyle, Locations, Meta, Music, News and Politics, Science, Social
  // Science and Humanities, Sports, Technology, Travel, Other

  return (
    <div className='search-list'>
      <Searchbar searchTerm={clickHandler} />
      <ButtonGroup minimal fill vertical>
        <Button minimal onClick={() => clickHandler(0, 'Architecture')}>
          Architecture
        </Button>
        <Button onClick={() => clickHandler(0, 'Art')}>Art</Button>
        <Button onClick={() => clickHandler(0, 'Business')}>Business</Button>
        <Button onClick={() => clickHandler(0, 'Education')}>Education</Button>
        <Button onClick={() => clickHandler(0, 'Entertainment')}>
          Entertainment
        </Button>
        <Button onClick={() => clickHandler(0, 'Gaming')}>Gaming</Button>
        <Button onClick={() => clickHandler(0, 'General')}>General</Button>
        <Button onClick={() => clickHandler(0, 'Hobbies and Interests')}>
          Hobbies and Interests
        </Button>
        <Button onClick={() => clickHandler(0, 'Law')}>Law</Button>
        <Button onClick={() => clickHandler(0, 'Lifestyle')}>Lifestyle</Button>
        <Button onClick={() => clickHandler(0, 'Locations')}>Locations</Button>
        <Button onClick={() => clickHandler(0, 'Meta')}>Meta</Button>
        <Button onClick={() => clickHandler(0, 'Music')}>Music</Button>
        <Button onClick={() => clickHandler(0, 'News and Politics')}>
          News and Politics
        </Button>
        <Button onClick={() => clickHandler(0, 'Science')}>Science</Button>
        <Button onClick={() => clickHandler(0, 'Social Science and Humanities')}>
          Social Science and Humanities
        </Button>
        <Button onClick={() => clickHandler(0, 'Sports')}>Sports</Button>
        <Button onClick={() => clickHandler(0, 'Technology')}>Technology</Button>
        <Button onClick={() => clickHandler(0, 'Travel')}>Travel</Button>
        <Button onClick={() => clickHandler(0, 'Other')}>Other</Button>
      </ButtonGroup>
    </div>
  )
}

SearchList.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default SearchList
