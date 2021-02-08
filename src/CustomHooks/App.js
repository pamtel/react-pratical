import React, {useState} from 'react'
import CustomTwo from './CustomTwo'
import useCounter from './useCounter'
import useFetch from '../useFetch/useFetch'

function App() {
    const {increaseCount, decreaseCount, resetCount,count} = useCounter()
    return (
        <div className="text-center mt-5">
            <h1 className="text-center mt-5 ">Custom Hooks</h1>
            <h2 className="text-center mt-5 font-bold text-xl">Count is = {count}</h2>
            <button className="ml-2 bg-gray-300 px-3" onClick={decreaseCount}>Decrease</button>
            <button className="ml-2 bg-gray-300 px-3" onClick={resetCount}>Reset</button>
            <button className="ml-2 bg-gray-300 px-3" onClick={increaseCount}>Increase</button>
            <CustomTwo/>
            <useFetch/>
        </div>
    )
}

export default App
