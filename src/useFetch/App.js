import React from 'react'
import Todos from './Todos'
import useFetch from './useFetch'

function App() {
    const [users, isLoading, isError] = useFetch("https://jsonplaceholder.typicode.com/users")

    if(isLoading) {
        return <h1>Loading...</h1>
    }
    if(isError) {
        return <h1>OOPS! There was an error</h1>
    }
    return (
        <div className="text-center">
            <h1 className="text-4xl">useFetch customHook</h1>

            {users.map(user => {
                return <p>{user.name}</p>
            })}

            <Todos/>
        </div>
    )
}

export default App
