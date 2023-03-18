import React ,{useState} from 'react'

export default function Counter() {
    /* The React useState Hook allows us to 
    track state in a function component */
    // count=field , setCount=method
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>{setCount(count-1)}}>Decrement </button>
        <button onClick={()=>{setCount(count+1)}}>Increment </button>
        <h1>{count}</h1>
    </div>
  )
}

