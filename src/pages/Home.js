import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@blueprintjs/core'

import { searchTopics } from '../actions'
import SearchList from '../components/SearchList'

import { sortByPoints } from '../utils/sort'

class Home extends Component {
  constructor (props) {
    super(props)

    this.renderList = this.renderList.bind(this)
    this.handleBtn = this.handleBtn.bind(this)
  }

  componentDidMount () {
    this.props.searchTopics(0, 'architecture', null, null, false)
  }

  renderList () {
    const { articles } = this.props

    return articles.data.children.sort(sortByPoints).map(article => {
      return (
        <li key={article.data.id} className='content__item'>
          <Link to='/' className='content__title'>
            {article.data.ups - article.data.downs} - {article.data.title}
          </Link>
        </li>
      )
    })
  }

  handleBtn (direction, query, beforeAfter) {
    const { articles } = this.props

    let currentCount = articles.count

    if (direction === 'prev') {
      this.props.searchTopics(
        currentCount - 10,
        query,
        beforeAfter,
        direction,
        false
      )
    } else {
      this.props.searchTopics(
        currentCount + 10,
        query,
        beforeAfter,
        direction,
        false
      )
    }
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
        <article className='content'>
          <h1 className='content__title'>{articles.query}</h1>
          <ul className='content__list'>{this.renderList()}</ul>

          <ButtonGroup minimal fill>
            {articles.data.before && (
              <Button
                className='content__btn-prev'
                onClick={() =>
                  this.handleBtn('prev', articles.query, articles.data.before)
                }
                icon='arrow-left'
                text={'Previous'}
              />
            )}
            {articles.data.after && (
              <Button
                className='content__btn-next'
                onClick={() =>
                  this.handleBtn('next', articles.query, articles.data.after)
                }
                rightIcon='arrow-right'
                text={'Next'}
              />
            )}
          </ButtonGroup>
        </article>
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
