import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, updateCount } from './store/counterSlice';
import Navbar from './components/Navbar';
import useFetch from './components/useFetch';
import Product from './components/Product';


function App() {
  const value = useSelector(state=> state.counter.value);
  const count = useSelector(state=> state.counter.count);
  const dispatch = useDispatch();
  const {isLoading, error, data} = useFetch("https://fakestoreapi.com/products")
  console.log(data, "<--data")
  return (
    <>
      <Navbar />
      <div className='container d-flex flex-wrap justify-content-between'>
      {data && data?.length > 0 ? data?.map((item,key)=>(
          <Product data={item} key={key} />
      )) : "Loading"}
      </div>






      <button onClick={()=>dispatch(increment())}>Counter {value}</button>

      <button onClick={()=>dispatch(updateCount(5))}>Counter {count}</button>
    </>
  )
}

export default App


// 1, store create with the help of documentation, --> store , wrap with App, slice (name, initailState, reducers (actions)) , connect reducer in store

// 2, useSelector() --> get the values from global state
// 3, useDispatch() --> perform the actions