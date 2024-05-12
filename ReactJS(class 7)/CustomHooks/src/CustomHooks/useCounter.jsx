import React, { useState } from 'react'

const useCounter = (initialValue , step) => {
    const [count, setCount] = useState(initialValue);
    const increment = ()=> {
        setCount(count + step)
    }
    const decrement = ()=>{
        setCount(count - step)
    }

  return ( {count, increment, decrement} )
}

export default useCounter
