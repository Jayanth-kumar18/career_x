import React, { Component } from 'react'
import CreditCard from './CreditCard'
export default class Payment extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ccVisible:false,
         nbVisible:false
      }
    }
    changeFunction=(e)=>{
        if(e.target.value==="creditCard")
             this.setState({ccVisible:true,nbVisible:false})
        else if(e.target.value==="netBanking")
            this.setState({ccVisible:false,nbVisible:true})
    }

  render() {
    return (
      <div style={{textAlign:"center", backgroundColor:"lightblue" ,height:"50vh"}}>
        <h1>Payment Methods</h1><br></br>
        <input type='radio' value='creditCard' name='payment' onChange={this.changeFunction}/>Credit Card
        <input type='radio' value='netBanking' name='payment' onChange={this.changeFunction}/>Net Banking<br></br>
        {this.state.ccVisible?<CreditCard/>:null}
        {this.state.nbVisible?
        <select>
            <option>ICICI Bank</option>
            <option>HDFC Bank</option>
        </select>:null}
      </div>
    )
  }
}
