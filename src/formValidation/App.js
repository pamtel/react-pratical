import React  from 'react';
import useForm from "./useForm";
import validate from "./Validate";

function App() {
    const {handleChange, handleSubmit, formInput:person, inputArray:people, errorMsg} = useForm(validate);
    
    return (
        <div className="bg-gray-100 h-screen border-2"> 
            <h1 className="font-bold text-xl text-center mt-10 pb-2">Form Validation</h1>
            <form onSubmit={handleSubmit} action="" className="w-4/5 m-auto p-4 bg-white">
                <div className="mb-4">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="firstName"
                    value={person.firstName} 
                    onChange={handleChange}
                    className={`${errorMsg.firstName && 'border-2 border-red-500'} bg-blue-50 py-1 px-2 rounded w-64`}/>
                    <div className="text-red-500">{errorMsg.firstName}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" 
                    value={person.email}
                    onChange={handleChange}
                    className={`${errorMsg.email && 'border-2 border-red-500'} bg-blue-50 py-1 px-2 rounded w-64`}/>
                    <div className="text-red-500">{errorMsg.email}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" 
                    value={person.password}
                    onChange={handleChange}
                    className={`${errorMsg.password && 'border-2 border-red-500'} bg-blue-50 py-1 px-2 rounded w-64`}/>
                    <div className="text-red-500">{errorMsg.password}</div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" name="password2" 
                    value={person.password2}
                    onChange={handleChange}
                    className={`${errorMsg.password2 && 'border-2 border-red-500'} bg-blue-50 py-1 px-2 rounded w-64`}/>
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

export default App
