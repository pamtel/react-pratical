// import React from 'react'

function Todo({todoItem, deleteTodoHandler}) {
    const handleDelete = () => {
        deleteTodoHandler(todoItem.id);
    }
    return (
        <li>
            <p>{todoItem.todo}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Todo
