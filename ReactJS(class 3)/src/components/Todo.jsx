import { useState } from "react";

export default function Todo() {

    const [input_txt, setInputTxt] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo() {
        setTodos([...todos, input_txt ])
        setInputTxt("")
    }

    
    function deleteTodo(index) {
      console.log(index);
      const remainingTodos = todos.filter((item, i)=> i !==index);
      setTodos(remainingTodos);
    }





   
    return (<div>
       <h1>Todo App</h1>
       <input type="text" value={input_txt} onChange={(e)=>setInputTxt(e.target.value)} />
       <button onClick={addTodo}>add todo</button>

        <br />
        <br />
        {
            todos.map((todo, i) => <div key={i}> {todo}    <button onClick={()=>deleteTodo(i)}>delete</button></div>)
        }
      
    </div>);
}