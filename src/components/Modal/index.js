import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './modal.css';

export default class Modal extends Component {
  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string
  }

  render() {
    const {
      placeholder, theme
    } = this.props;

    return (
      <div className={theme ? css.theme : css.inputContainer}>
        <input placeholder={placeholder} />
      </div>
    )
  }
}
