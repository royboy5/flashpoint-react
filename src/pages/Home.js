import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { searchTopics } from '../actions'
import SearchList from '../components/SearchList'

class Home extends Component {
  componentDidMount () {
    this.props.searchTopics('architecture', null, true)
  }
  render () {
    const { articles, searchTopics } = this.props

    console.log(this.props, 'home')

    if (_.isEmpty(articles)) {
      return <div>loading...</div>
    }

    return (
      <div className='home'>
        <SearchList clickHandler={searchTopics} />
        <div>
          Content
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.instanceOf(Object).isRequired,
  searchTopics: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    articles: state.articles
  }
}

export default connect(
  mapStateToProps,
  { searchTopics }
)(Home)
