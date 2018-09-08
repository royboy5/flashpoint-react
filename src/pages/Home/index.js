import styles from './home.css'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return <div className={styles.home}>HOME</div>
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Home)
