import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0

      }
      this.incrementFunction=this.incrementFunction.bind(this);
      this.decrementFunction=this.decrementFunction.bind(this);
    }
   
    incrementFunction()
    {
        this.setState({count: this.state.count+1})
    }
    decrementFunction()
    {
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>
        Counter:<h1> {this.state.count}</h1>
        <button onClick={this.incrementFunction}> + </button>
        <button onClick={this.decrementFunction}> - </button>

      </div>
    )
  }
}
