import React, { Component } from 'react'

// import ExampleComponent from 'clydene'
import {Button, Input} from 'clydene'

export default class App extends Component {
  render () {
    return (
      <div>
        {/* <ExampleComponent text='This is where the UI sample elements will go!' /> */}
        <Button text='hi!' />
        <Input />
      </div>
    )
  }
}
 