import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

function TodoWrapper() {
  const [Todos, setTodos] = useState([]);

  const toggleComplete = (id)=>{
    setTodos(Todos.map(todo =>
       todo.id === id ?
        {...todo,completed:!todo.completed}:todo
    ))
  }

  const deleteTodo = id =>{
    setTodos(Todos.filter(todo=>todo.id !== id))
  }
  const editTodo = id =>{
    setTodos(Todos.map(todo =>todo.id === id ? 
      {...todo,isEditing:!todo.isEditing }: todo))
  }
const editTask =(task, id) =>{
setTodos(Todos.map(todo=>todo.id === id ?
  {...todo,task,isEditing:!todo.isEditing}:todo
  ))
}
  const addTodo = (todo) => {
    setTodos([
      ...Todos, 
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(Todos)
  };
  return (
    <div className="TodoWrapper" >
      <h1>Get The Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {
        Todos.map((todo,index) => (
          todo.isEditing ? 
          (<EditTodoForm editTodo={editTask} todo={todo}/>):
         ( <Todo 
          todo={todo} 
          key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />)

        ))
      }
    </div>
  );
}

export default TodoWrapper;
