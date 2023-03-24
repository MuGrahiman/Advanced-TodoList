
import React, { useState } from 'react'

function EditTodoForm({editTodo,todo}) {

  const [value, setValue] = useState(todo.task);
  const handleForm = (e) => {

    e.preventDefault();
    editTodo(value ,todo.id)
    setValue('')

  }

  return (
    <form className='TodoForm' onSubmit={handleForm}>
      <input type="text" className="todo-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Update the task!' />
      <button className="todo-btn" type='submit'>Update Task</button>
    </form >
  )
}



export default EditTodoForm
