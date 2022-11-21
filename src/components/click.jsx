import React, { Component } from 'react';
import WithCounter from './withCounter';

 class Click extends Component {
  
  render() {
    const {count , incrementCount}= this.props
    return (
      <button onClick={incrementCount}>  Clicked {count} Times</button>
    )
  }
}

export default WithCounter( Click);