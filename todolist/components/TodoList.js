import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoList(props) {
    const [add, setAdd] = useState("");

    const handleTodo = (event) => setAdd(event.target.value);
    const addTodo = () => {
        props.addTodo({
            id: uuidv4(),
            title: add,
            completed: false
        });
        setAdd("");
    };
    return(
        <div class="list">
            <div class="deco">
                <h2 class="title">My To Do List</h2>
                <input type="text"
                        placeholder="Add a new task......"
                        onChange={handleTodo}
                        value={add} />
                <button onClick={addTodo}>ADD</button>
            </div>
        </div>
    )
}
export default TodoList;


