import {useEffect, useState} from 'react'

function UseEffectFetch() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        setIsLoading(true);
       fetch(URL)
       .then(res => res.json())
       .then(data => {
            setUsers(data);
            setIsLoading(false);
       })
       .catch(err => {
           console.log(err);
           setError(true)
           setIsLoading(false);
       });
    }, []);
    
    if (isLoading) {
        return <h4>Loading...</h4>
    }

    if(error){
        return <h4>Ooops!! there was an error loading this page</h4>
    }

    return (
        <ol>
           {users.map(user => <Person key={user.id} user={user}/>)}
        </ol>
    )
}

const Person = ({user}) => {
    return (
        <li>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </li>
    )
}

export default UseEffectFetch
