import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, decrementByValue, increment } from './redux/features/counter.slice';
import { incrementBonus } from './redux/features/bonus.slice';
import { getPosts } from './redux/features/posts.slice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  console.log(state);

  return (
    <div>
      <h2>Counter: {state.counter.value} </h2>
      <button onClick={() => dispatch(increment())}>Counter ++ </button>
      <button onClick={() => dispatch(decrement())}>Counter -- </button>
      <button onClick={() => dispatch(decrementByValue(5))}>Decrement by 5 </button>
      <br />
      <br />

      <h2>Bonus: {state.bonus.value} </h2>
      <button onClick={() => dispatch(incrementBonus())}>Bonus ++ </button>


      <h3>Api Posts</h3>
      <button onClick={() => dispatch(getPosts())}>Call Apis</button>
      {state.posts.loader && <h1>loading...</h1>}
      {!state.posts.loader && state.posts.error && <h1>{state.posts.error}</h1>}
      {!state.posts.loader && state.posts.posts && state.posts.posts.map(p =>  <h1 key={p.id}>{p.title}</h1>)}
   
    </div>
  )
}

export default App
