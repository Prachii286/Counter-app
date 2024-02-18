import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {

 const [count,setCount]=useState(0);

 const Increment = () =>{
    setCount(count+1);
 }

 const Decrement = () =>{
   if(count>0){
    setCount(count-1);
   }
 }

 const Reset = () =>{
    setCount(0);
 }

  return (
    <>
    <div className='container'>
      <h1>COUNTER APP</h1>
    <div className='count'>
    <input type="text"  value={count} />
    </div>
    <div>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </div>
    </div>
    </>
  )
}
