import { useState } from "react";
import useCounter from "./CustomHooks/useCounter";
import useFetch from "./CustomHooks/useFetch";

function App() {
  const counter = useCounter(0 , 1)
  const counter2 = useCounter(0,2)

  const productsData = useFetch("https://fakestoreapi.com/products");




  console.log(productsData);

  if(productsData.isLoading){
    return <div>Loading....</div>
  }

  return (
    <>
      <h1>Custom Hooks in React</h1>
      <div>
        <h1>{counter.count}</h1>
        <button onClick={counter.increment}>Increment</button>
        <button onClick={counter.decrement}>Decrement</button>
      </div>

      <div>
        <h1>{counter2.count}</h1>
        <button onClick={counter2.increment}>Increment</button>
        <button onClick={counter2.decrement}>Decrement</button>
      </div>

      {productsData?.data?.map((item, key)=> <p key={key}>{item.title}</p>)}

    </>
  )
}

export default App
