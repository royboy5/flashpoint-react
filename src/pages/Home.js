import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from '@blueprintjs/core'

import { searchTopics, currentArticle } from '../actions'
import SearchList from '../components/SearchList'
import Popup from '../components/Popup'

import { sortByPoints } from '../utils/sort'

class Home extends Component {
  constructor (props) {
    super(props)

    this.renderList = this.renderList.bind(this)
    this.handlePaginationBtn = this.handlePaginationBtn.bind(this)
    this.handlePaginationBtn = this.handlePaginationBtn.bind(this)
    this.closePopup = this.closePopup.bind(this)

    this.state = {
      openPopup: false
    }
  }

  componentDidMount () {
    const { searchTopics } = this.props

    searchTopics(0, 'architecture', null, null, false)
  }

  closePopup () {
    this.setState({
      openPopup: false
    })
  }

  renderList () {
    const { articles } = this.props

    return articles.data.children.sort(sortByPoints).map(article => {
      return (
        <Button
          key={article.data.id}
          className='content__item'
          onClick={() => this.handleArticleBtn(article)}
          fill
          minimal
          alignText='left'
        >
          {article.data.ups - article.data.downs} - {article.data.title}
        </Button>
      )
    })
  }

  handleArticleBtn (article) {
    const { currentArticle } = this.props

    console.log(article, 'current article')

    currentArticle(article)

    this.setState({
      openPopup: true
    })
  }

  handlePaginationBtn (direction, query, beforeAfter) {
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
    const { articles, searchTopics, current } = this.props
    const { openPopup } = this.state

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
                  this.handlePaginationBtn(
                    'prev',
                    articles.query,
                    articles.data.before
                  )
                }
                icon='arrow-left'
                text={'Previous'}
              />
            )}
            {articles.data.after && (
              <Button
                className='content__btn-next'
                onClick={() =>
                  this.handlePaginationBtn(
                    'next',
                    articles.query,
                    articles.data.after
                  )
                }
                rightIcon='arrow-right'
                text={'Next'}
              />
            )}
          </ButtonGroup>
        </article>
        {!_.isEmpty(current) && (
          <Popup
            showPopup={openPopup}
            closePopup={this.closePopup}
            content={current.data}
          />
        )}
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.instanceOf(Object).isRequired,
  current: PropTypes.instanceOf(Object),
  searchTopics: PropTypes.func.isRequired,
  currentArticle: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    current: state.current
  }
}

export default connect(
  mapStateToProps,
  { searchTopics, currentArticle }
)(Home)
