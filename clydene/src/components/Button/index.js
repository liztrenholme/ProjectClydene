import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './button.css'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string
  }

  render() {
    const {
      text, theme
    } = this.props

    return (
      <div className={theme ? css.theme : css.buttonContainer}>
        {text}
      </div>
    )
  }
}
