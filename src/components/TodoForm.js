import React, { useState } from 'react'

function TodoForm({addTodo}) {

  const [value, setValue] = useState("");

  const handleForm = (e) => {

    e.preventDefault();
    addTodo(value)
    setValue('')

  }

  return (
    <form className='TodoForm' onSubmit={handleForm}>
      <input type="text" className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='what is the task today ?' />
      <button className="todo-btn" type='submit'>Add Task</button>
    </form >
  )
}

export default TodoForm
