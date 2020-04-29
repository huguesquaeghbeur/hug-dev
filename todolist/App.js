import React, { useState } from 'react';
import './components/Todo.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  
  async function fetchTodos() {
    const result = await fetch("http://localhost:4000/todos");
    const data = await result.json();
    setTodos(data);
  }
  
  const addTodo = (todo) => {
    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => fetchTodos());
  };

  const checkTodo = (id, completed) => {
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    }).then(() => fetchTodos());
  };
  
  const eraseTodo = (id) => {
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => fetchTodos());
  };

  return (
    <div class="post-it">
      <TodoList addTodo={addTodo}/>
      <Todo todos={todos} 
            checkTodo={checkTodo} 
            eraseTodo={eraseTodo}/>
    </div>
  );
}
export default App;
