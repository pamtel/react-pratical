import {useState} from 'react'
function App() {
    const [names, setNames] = useState([{id: 1, name: "John"}, {id: 2, name: "Joshua"}]);
    return (
        <div>
            <img src="logo192.png" alt=""/>
            {names.map((name, index) => {
                return <p key={name.id}>{name.name}</p>
            })}
        </div>
    )
}

export default App
