import React from "react";

export default function Todo(props) {
    const checkTodo = (id) => {
        props.checkTodo(id);
    }

    const eraseTodo = (event, id) => {
        event.stopPropagation();
        props.eraseTodo(id);
    }
    return (
        <ul>
            {props.todos.map((todo) => {
                return (
                    <li 
                        key={todo.id} 
                        className={todo.completed ? 'checked': ''} 
                        onClick={() =>checkTodo(todo.id)}>{todo.title}
                        <button onClick={(e) => eraseTodo(e, todo.id) }>X</button>
                    </li>
                );
            })};
        </ul>
    )
}