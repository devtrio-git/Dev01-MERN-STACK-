import { useEffect, useReducer, useState } from "react";


const initialValues = {
  products: [],
  loader: false,
  error: ""
}

const reducer = (state, action) => {
  if (action.type == "LOADER") {
     return {...state, loader: action.payload}
  }
  if (action.type == "PRODUCTS") {
     return {...state, loader: false, products: action.payload}
  }
  if (action.type == "ERROR") {
     return {...state, loader: false, error: action.payload}
  }

}

function App() {

  const [states, dispatch] = useReducer(reducer, initialValues);

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async function () {
      dispatch({type:"LOADER", payload: true})
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch({type:"PRODUCTS", payload: data})
        
      } catch (error) {
        console.log(error);
        dispatch({type:"PRODUCTS", payload: "Failed to fetch products"})
      }
    })();
  }, [])



  // using useSTates
  // useEffect(() => {
  //   (async function () {
  //     setLoader(true);
  //     try {
  //       const res = await fetch('https://fakestoreapi.com/products');
  //       const data = await res.json();
  //       setProducts(data)
  //     } catch (error) {
  //       console.log(error);
  //       setError("Failed to fetch products")
  //     }
  //     setLoader(false)
  //   })();
  // }, [])


  return (
    <div>
      {states.loader && <h1>Loading...</h1>}
      {!states.loader && states.error && <h1>{states.error}</h1>}
      {!states.loader && states.products.length == 0 && <h1>No Product to show</h1>}
      {!states.loader && states.products && states.products.length > 0 && states.products.map(product => <h2 key={product?.id}>{product?.title}</h2>)}
    
    {/* useState */}
      {/* {loader && <h1>Loading...</h1>}
      {!loader && error && <h1>{error}</h1>}
      {!loader && products.length == 0 && <h1>No Product to show</h1>}
      {!loader && products && products.length > 0 && products.map(product => <h2 key={product?.id}>{product?.title}</h2>)}
     */}
    </div>
  )
}

export default App;
