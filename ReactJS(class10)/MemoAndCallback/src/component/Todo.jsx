import React, { memo } from 'react'

const Todo = ({todo, addTodo}) => {
    console.log("child renders")
  return (
    <div>
        <button onClick={addTodo}>Add Todo</button>

        {
            todo.map((item,key)=> <h3 key={key}>{item+key}</h3>)
        }
    </div>
  )
}

export default memo(Todo)
