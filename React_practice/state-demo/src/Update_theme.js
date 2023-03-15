import React, { Component } from 'react'

export default class Update_theme extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         bgCol:'blue'
      }
    }
    whenClicked=(e)=>{
        this.setState(
            {
                bgCol:e.target.value
            }
        );
    }
  render() {
    return (
      <div style={{backgroundColor:this.state.bgCol ,height:200,width:200}}> Update My background 
      <button onClick={this.whenClicked} value='green'> green</button>
      <button onClick={this.whenClicked} value='red'> red</button>
      <button onClick={this.whenClicked} value='yellow'>yellow</button>
      </div>
      
    )
  }
}
