import React from 'react'

export default function CreditCard() {
  return (
    <div>
        <h1>Credit Card Details Form</h1>
        <form>
            <label>Card Number</label>
            <input type='text' name='ccNumber'/><br></br>
            <button type='submit'>Paynow</button>
        </form>
    </div>
  )
}

