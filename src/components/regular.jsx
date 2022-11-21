import React, { Component } from 'react'

class Regular extends Component {
  render() {
    console.log("--------regular component--------------")
    return (
      <div>Regular component {this.props.name}</div>
    )
  }
}

export default Regular