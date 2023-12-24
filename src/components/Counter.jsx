import React, { useState } from 'react'
import { useCustomEffect } from '../hooks/use-custom-effect'

const Counter = () => {
    const[count, setCount]=useState(0)
    // const[count1, setCount1]= useState(0)

    useCustomEffect(()=>{
        console.log("Effect triggered", count)
        return()=>{
            console.log("cleanup")
        }
    },[count])

    // console.log("re rendered")

    const increment=()=>{
        setCount(count + 1)
    }

    const decrement=()=>{
        setCount(count - 1)
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        <h1>
            Counter: {count}
        </h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter