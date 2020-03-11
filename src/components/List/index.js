import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './list.css';

export default class List extends Component {
  static propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string
  }

  render() {
    const {
      placeholder, theme
    } = this.props;

    return (
      <div className={theme ? css.theme : css.listContainer}>
        <input placeholder={placeholder} />
      </div>
    );
  }
}
