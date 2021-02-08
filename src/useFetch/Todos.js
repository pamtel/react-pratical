import React from 'react'
import useFetch from "./useFetch";

const url = "https://jsonplaceholder.typicode.com/todos"
function Todos() {
    const [todos, isLoading, isError] = useFetch(url)
    if(isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="mt-10">
            <h1 className="text-4xl">TODOS START HERE</h1>
            {todos.map(todo => <p>{todo.title}</p>)}
        </div>
    )
}

export default Todos
