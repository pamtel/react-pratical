import { useContext } from 'react'
import { PeopleContext } from "./UseContext";

function ComponentC() {
    const people = useContext(PeopleContext)
    return (
        <div>
            <h2>I am component C</h2>
            {people.map((i, index) => (
                <h1 key={index}>{i}</h1>
            ))}
        </div>
    )
}

export default ComponentC
