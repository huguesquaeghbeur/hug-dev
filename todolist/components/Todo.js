import React from "react";

export default function Todo(props) {
    return (
        <ul>
            {props.todos.map((todo) => {
            return<li key={todo.id}>{todo.title}</li>;
            })};
        </ul>
    )
}