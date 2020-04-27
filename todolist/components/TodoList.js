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
    return (
        <div>
            <input type="text" onChange={handleTodo} value={add}/>
            <button onClick={addTodo}>ADD</button>
        </div>
    );
}
export default TodoList;


