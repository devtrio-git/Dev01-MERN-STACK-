import { useEffect, useState } from "react"


function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log("app is rendered")
  // useEffect takes two arg --> function , [dependecy]

  // useEffect(()=>{
  //   console.log("when app first time rendered")

  //   return ()=> ( console.log("App component unmount"))// this will run when component unmount (jb component DOM sy remove hojaega)

  // },[count]);

  // const getData = async () => {
  //   setLoader(true);
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //     const data = await res.json();
  //     console.log(data)
  //     setData(data)
  //     setLoader(false);
  //   } catch (error) {
  //     console.log(error)
  //     setLoader(false);
  //   }
  // }
  // useEffect(() => {
  //   getData();
  // }, [])

  // cleanup example
  const [width, setWidth] = useState(window.screen.width);

  useEffect(()=> {
    window.addEventListener("resize", calculateWidth)
    console.log(width, "mount")
    return () => (
      window.removeEventListener("resize", calculateWidth)
    )
  })


  function calculateWidth(){
    setWidth(window.innerWidth)
  }
  return (
    <>
      <h1>Hello {width}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
      <button onClick={() => setCount2(prev => prev + 1)}>Count2 {count2}</button>
      <div className="d-flex flex-wrap justify-content-center">
        {loader ?
          <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          :
          <>
            {
              data.map((item, index) => (
                <div key={index}>
                  <img src={item?.url} alt="" />
                </div>
              ))
            }
          </>
        }
      </div>
    </>
  )
}

export default App

// notes for interview

//1. Understanding Component Lifecycle

// Let's first revisit the concept of component lifecycle in React. A component goes through various stages during its existence:

//1 Mounting: This occurs when a component is first created and inserted into the DOM. This is a good time to fetch initial data or set up subscriptions.

//2 Updating: Whenever the component's state or props change, it re-renders. This is where you might update side effects based on those changes.

// Unmounting: When a component is removed from the DOM, it gets unmounted. This is a good time to clean up any resources it might be holding, like subscriptions or timers.


// Using useEffect Hook
// The useEffect hook takes two arguments:

// Effect Function: This function contains the actual side effect logic you want to execute.

// Dependency Array (Optional): This is an array of values that determines when the effect function runs. If the dependency array is empty ( [] ), the effect runs only once after the initial render (similar to componentDidMount).


// 1. componentDidMount


// case1-> function runs only first time render (only run first time)

// useEffect(()=>{
//   console.log("when app first time rendered")
// },[]);


//case2-> funtions runs on particular state dependency (initialize k wkt run hoga and count update pai run hoga)

// useEffect(()=>{
//   console.log("when app first time rendered")
// },[count]); 
