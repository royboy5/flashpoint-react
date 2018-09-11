import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Dialog } from '@blueprintjs/core'
import moment from 'moment'

const Popup = ({ showPopup, closePopup, content }) => (
  <Dialog
    className='popup'
    isOpen={showPopup}
    onClose={closePopup}
    backdropClassName='popup-backdrop'
  >
    <Icon
      className='popup__close'
      icon='cross'
      onClick={closePopup}
      iconSize='4rem'
    />
    <h3 className='popup__title'>
      <a href={`https://reddit.com${content.permalink}`} target='_blank'>
        {content.title}
      </a>
    </h3>
    <p className='popup__count'>Subscribers: {content.subreddit_subscribers}</p>
    <p className='popup__date'>
      Created:{' '}
      {moment(content.created_utc * 1000).format('YYYY-MM-DD HH:MM:SS A')}
    </p>
    <p className='popup__ranking'>Ranking: {content.score}</p>
    <p className='popup__preview'>Preview: {content.selftext}</p>
  </Dialog>
)

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  content: PropTypes.instanceOf(Object).isRequired
}

export default Popup
