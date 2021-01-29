import React from 'react'
import Todo from './Todo'

function Todos({todos, deleteTodoHandler}) {
    return (
        <ul>{todos.map(todoItem => <Todo key={todoItem.id} todoItem={todoItem} deleteTodoHandler={deleteTodoHandler} />)}</ul>
    )
}

export default Todos
