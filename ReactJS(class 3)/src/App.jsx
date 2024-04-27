import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';

function App() {
  // variable, updateVariableFun
  // const [counter, setCounter] = useState(0);
  // const [total, setTotal] = useState(0);


  function handleIncrementCount() {
    let x = counter + 1;
    setCounter(x);
    // setTotal(x + 10);
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

  // setCounter((prevVal)=> prevVal + 1);
  // setCounter((prevVal)=> prevVal + 1);
  // setCounter((prevVal)=> prevVal + 1);
  };

  // let count = 0;

  // function handleIncrementCount() {
  //   count++;

  //   console.log(count, 'handler');
  // };


  // console.log(counter, 'app');
  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <h1>Counter: {counter}</h1> */}
      {/* <h1>Total: {total}</h1> */}

      {/* <button onClick={handleIncrementCount}>increment</button> */}


      {/* xxxxxxxxx Todo xxxxxxxxxxxx */}
      <Todo />
    </div>
  )
}

export default App;
