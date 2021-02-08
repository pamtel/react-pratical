import {useState} from 'react'

function Form() {
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({firstName: "", email: ""})
    // const [firstName, setFirstName] = useState("")
    // const [email, setEmail] = useState("")

    // const handleNameInput = (e) => {
    //     setFirstName(e.target.value)
    // }

    // const handleEmailInput = (e) => {
    //     setEmail(e.target.value)
    // }

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setPerson({...person, [inputName]: inputValue})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPerson = {...person,id:new Date().getTime().toString()}
        setPeople([...people,newPerson])
        setPerson({firstName: "", email: ""})
        // setFirstName('');
        // setEmail('')
       console.table(person); 
    }
    return (
        <div className="w-98 p-4 bg-gray-100 m-auto mt-32">
            <form onSubmit={handleSubmit} action="" className="">
                <div className="mb-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="firstName" onChange={handleChange} value={person.name}/>
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" onChange={handleChange} value={person.email} />
                </div>

                <button type="Submit" className="py-2 px-3 bg-gray-300 hover:bg-gray-600 rounded-md ml-11">Add Person</button>
            </form>

            <div className="w-4/5 m-auto mt-12">
                {people.map(person => {
                    return (
                        <div key={person.id} className="flex justify-between py-3 px-4 mb-4 bg-white shadow hover:bg-opacity-50">
                            <h3>{person.firstName}</h3>
                            <h3>{person.email}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Form
