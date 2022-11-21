import React, { Component } from 'react'
import Click from './components/click'
import Hower from './components/hower'
import Parent from './components/parent'

export class App extends Component {
  render() {
    return (
      <>
      <Click/>
      <Hower/>

      <Parent/>
      </>
    )
  }
}

export default App
