import { useState } from 'react';
import validate from "./Validate";

const initialState = {firstName:"", email:"", password:"", password2:""};


function Form2() {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState(initialState);
    const [errorMsg, setErrorMsg] = useState(initialState);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validate(person);
        setErrorMsg(formErrors);
        console.log(Object.keys(formErrors));
        if(Object.keys(formErrors).length) {
            return
        } else{
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson]);
            setPerson(initialState);
            setErrorMsg(initialState);
        }
    }
    return (
        <div className="bg-gray-100 h-screen border-2"> 
            <h1 className="font-bold text-xl text-center mt-10 pb-2">Form Validation</h1>
            <form onSubmit={handleSubmit} action="" className="w-4/5 m-auto p-4 bg-white">
                <div className="mb-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="firstName"
                    value={person.firstName} 
                    onChange={handleChange}
                    className="bg-blue-50 py-1 px-2 rounded w-64"/>
                    <div className="text-red-500">{errorMsg.firstName}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" 
                    value={person.email}
                    onChange={handleChange}
                    className="bg-blue-50 py-1 px-2 rounded w-64"/>
                    <div className="text-red-500">{errorMsg.email}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" 
                    value={person.password}
                    onChange={handleChange}
                    className="bg-blue-50 py-1 px-2 rounded w-64"/>
                    <div className="text-red-500">{errorMsg.password}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" name="password2" 
                    value={person.password2}
                    onChange={handleChange}
                    className="bg-blue-50 py-1 px-2 rounded w-64"/>
                    <div className="text-red-500">{errorMsg.password2}</div>
                </div>

                <button type="submit" className="bg-gray-400 px-3 py-2 rounded ml-5">Add Person</button>
            </form>

            <div className="w-4/5 m-auto mt-12">
                {people.map(person => {
                    return(
                        <div 
                            key={person.id}
                            className="flex justify-between py-3 px-4 bg-white mb-4 shadow hover:bg-opacity-50">
                            <h3 className="text-lg font-bold">{person.firstName}</h3>
                            <h4 className="text-lg">{person.email}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Form2
