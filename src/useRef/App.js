import {useState} from 'react'

function App() {
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({firstName: "", lastName: "", phone:"", email: "", address:"",textArea:''})

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setPerson({...person, [inputName]: inputValue})
    }

    console.log(person);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newPerson = {...person,id:new Date().getTime().toString()}
        setPeople([...people,newPerson])
        setPerson({firstName: "", lastName: "", phone:"", email: "", address:"", textArea:''})
        console.table(person);
    }
    return (
        <div className="h-screen flex md:justify-center pb-20 pt-5 bg-gray-200">
            <form onSubmit={handleSubmit} action="" className="bg-gray-400 p-8 mr-5">
            <h1 className="text-center font-bold uppercase text-xl pb-5">Contact Form</h1>
                <div className="pb-3">
                    <label htmlFor="name">First Name:  </label>
                    <input type="text" name="firstName" onChange={handleChange} value={person.firstName}/>
                </div>

                <div className="pb-3">
                    <label htmlFor="name">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleChange} value={person.lastName}/>
                </div>

                <div className="pb-3">
                    <label htmlFor="phone">Phone: </label>
                    <input type="phone" name="phone" onChange={handleChange} value={person.phone}/>
                </div>

                <div className="pb-3">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange} value={person.email}/>
                </div>

                <div className="pb-3">
                    <label htmlFor="address">Address: </label>
                    <input type="address" name="address" onChange={handleChange} value={person.address}/>
                </div>

                <h3>Status:</h3>
                <div className="pb-3">
                    <input type="radio" id="married" name="status"/>
                    <label htmlFor="married" className="pr-3" value="married">Married</label>

                    <input type="radio" id="single" name="status"/>
                    <label htmlFor="single" className="pr-3" value="single">Single</label>

                    <input type="radio" id="none" name="status"/>
                    <label htmlFor="none" className="pr-3" value="none">None</label>
                </div>
                <textarea name='textArea'  cols="38" rows="5" placeholder="Send a message..." onChange={handleChange} value={person.textArea}></textarea>
                
                <div className="pt-3 ">
                    <button type="submit" className="px-3 py-2 bg-blue-500 rounded-lg" >Submit</button>
                </div>
            </form>

            <div>
                {people.map(person => {
                    return(
                        <div key={person.id} className="mb-3 py-3 px-2 bg-gray-50 shadow hover:bg-opacity-50">
                            <h3>{person.firstName}</h3>
                            <h3>{person.lastName}</h3>
                            <h3>{person.phone}</h3>
                            <h3>{person.email}</h3>
                            <h3>{person.address}</h3>
                            <h3>{person.textArea}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
