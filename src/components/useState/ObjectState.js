import {useState} from 'react'

function ObjectState() {
    const [ person, setPerson] = useState({
        firstName: "Jane",
        lastName: "Doe"
    })

    const handleFirstNameChange = () => {
        setPerson({...person, firstName: "John"});
    }
    return (
        <div>
            <h4>{person.firstName} {person.lastName}</h4>
            <button onClick={handleFirstNameChange}>Change Name</button>
        </div>
    )
}

export default ObjectState
