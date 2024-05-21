import { useCallback, useMemo, useState } from 'react'

import './App.css'
import Todo from './component/Todo';
function App() {
  const [show, setShow] = useState(true);
  const [todo, setTodo] = useState(["task", "task"]);
  const [myNum, setMyNum] = useState(0)


  const countNumber = (num)=>{
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log("countNumber -->", num)
    return num;
  }

  // const checkData = countNumber(myNum);

  const checkData = useMemo(()=>{
    return countNumber(myNum)
  },[myNum])

// const addTodo = ()=>{
//   setTodo(prev => [...prev, "task"])
// }

  const addTodo = useCallback(()=>{
    return  setTodo(prev => [...prev, "task"])
  },[todo])

  return (
    <>
      <h1>useMemo</h1>
      <button onClick={()=> setMyNum(myNum+1)}>
        Counter
      </button>

      <p>new Number {checkData}</p>
      
      <button onClick={()=> setShow(!show)} >
        {show? "Click" : "Click More"}
      </button>

     {/*  */}
     <Todo todo={todo} addTodo={addTodo}></Todo>
    </>
  )
}

export default App


// useMemo:

// React Hook that memoizes (caches) the result of a function based on its dependencies.
// Returns the same value as long as the dependencies haven't changed, preventing unnecessary re-computations.
// Useful for expensive calculations or data transformations that don't rely on component state or props directly.




// useCallback:

// React Hook that memoizes a callback function based on its dependencies.
// Ensures the component receives the same function reference as long as the dependencies haven't changed, even if the component re-renders.
// This is crucial for child components that rely on the same callback function to avoid unnecessary prop updates and re-renders.