// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import styles from './styles.css'

// export default class ExampleComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   }

//   render() {
//     const {
//       text
//     } = this.props

//     return (
//       <div className={styles.test}>
//         Example Component: {text}
//       </div>
//     )
//   }
// }
// import Button as Button from './components/Button'
// import Button from './components/Button'
// import Input from './components/Input'
const defaultAwesomeFunction = (name) => {
  const returnStr = `I am the Default Awesome Function, fellow comrade! - ${name}`;
  return returnStr;
};

const awesomeFunction = () => 'I am just an Awesome Function';

export default defaultAwesomeFunction;

export { awesomeFunction };

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
