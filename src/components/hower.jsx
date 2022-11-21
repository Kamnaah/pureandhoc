import React, { Component } from 'react';
import WithCounter from './withCounter';

 class Hower extends Component {
 
  render() {
    const {count, incrementCount}=this.props;
    return (
      <>
      <h2 onMouseOver={incrementCount}>   Hovered {count} times</h2>
      </>
    )
  }
}

export default WithCounter( Hower )