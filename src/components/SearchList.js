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
        <Button minimal onClick={() => clickHandler('Architecture')}>
          Architecture
        </Button>
        <Button onClick={() => clickHandler('Art')}>Art</Button>
        <Button onClick={() => clickHandler('Business')}>Business</Button>
        <Button onClick={() => clickHandler('Education')}>Education</Button>
        <Button onClick={() => clickHandler('Entertainment')}>
          Entertainment
        </Button>
        <Button onClick={() => clickHandler('Gaming')}>Gaming</Button>
        <Button onClick={() => clickHandler('General')}>General</Button>
        <Button onClick={() => clickHandler('Hobbies and Interests')}>
          Hobbies and Interests
        </Button>
        <Button onClick={() => clickHandler('Law')}>Law</Button>
        <Button onClick={() => clickHandler('Lifestyle')}>Lifestyle</Button>
        <Button onClick={() => clickHandler('Locations')}>Locations</Button>
        <Button onClick={() => clickHandler('Meta')}>Meta</Button>
        <Button onClick={() => clickHandler('Music')}>Music</Button>
        <Button onClick={() => clickHandler('News and Politics')}>
          News and Politics
        </Button>
        <Button onClick={() => clickHandler('Science')}>Science</Button>
        <Button onClick={() => clickHandler('Social Science and Humanities')}>
          Social Science and Humanities
        </Button>
        <Button onClick={() => clickHandler('Sports')}>Sports</Button>
        <Button onClick={() => clickHandler('Technology')}>Technology</Button>
        <Button onClick={() => clickHandler('Travel')}>Travel</Button>
        <Button onClick={() => clickHandler('Other')}>Other</Button>
      </ButtonGroup>
    </div>
  )
}

SearchList.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default SearchList
