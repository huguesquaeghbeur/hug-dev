import React from "react";

export default function Todo(props) {
    const checkTodo = (id, completed) => {
        props.checkTodo(id, completed);
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
                        className={todo.completed ? 'checked' : ''}
                        onClick={() => checkTodo(todo.id, todo.completed)}>{todo.title}
                        <button onClick={(e) => eraseTodo(e, todo.id)}>X</button>
                    </li>
                );
            })}
        </ul>
    )
}
