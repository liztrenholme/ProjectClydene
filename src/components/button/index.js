import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import './button.css';
import PropTypes from 'prop-types'; 

class Button extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#fff'}}>
     <button>button</button>
      </div>
    );
  }
}

Button.propTypes = {
//   items: PropTypes.object,
//   _id: PropTypes.string,
//   itemName: PropTypes.string,
//   imageURL: PropTypes.string,
//   itemManufacturer: PropTypes.string,
//   year: PropTypes.number,
//   openModal: PropTypes.func
};

export default Button;