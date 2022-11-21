import React, { PureComponent } from 'react'
import Pure from './pure'
import Regular from './regular'

class Parent extends PureComponent {
  constructor(){
    super()
    this.state={
      name:"kamna"
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:"kamna"
      })
    },2000)
  }
  render() {
    console.log("----------------parent component-------------------")
    return (
      <div>Parent component
        <Regular name={this.state.name}/>
        <Pure name={this.state.name}/>
      </div>
    )
  }
}

export default Parent