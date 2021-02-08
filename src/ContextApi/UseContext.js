import React, {createContext} from 'react'
import ComponentB from './ComponentB'

export const PeopleContext = createContext(null)
function UseContext() {
    const people = ['Tosin', 'John', 'Mary'];
    const sayHi = 'helo'
    return (
        <PeopleContext.Provider value={people}>
              <ComponentA/>
        </PeopleContext.Provider>
    )
}

const ComponentA = () => {
    return (
        <div className="text-center pt-5">
            <h2>I am component A</h2>
            <ComponentB/>
        </div>
    )
}

export default UseContext
