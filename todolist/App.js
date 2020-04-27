import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  
  async function fetchTodos() {
    const result = await fetch("http://localhost:4000/todos");
    const data = await result.json();
    setTodos(data);
  }
  useEffect(() => {
    fetchTodos();
  }, [todos]);

  const addTodo = (todo) => {
    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    }).then(() => fetchTodos());
  };
  return (
    <div>
      <TodoList addTodo={addTodo}/>
      <Todo todos={todos}/>
    </div>
  )
}
export default App;
