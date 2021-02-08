import React from 'react'
import {useState} from "react"
import useCounter from './useCounter'

function CustomTwo() {
    const {increaseCount, decreaseCount, resetCount, count} = useCounter(5,10)
    return (
        <div>
            <h2 className="text-center mt-5 font-bold text-xl">CountTwo is = {count}</h2>
            <button className="ml-2 bg-gray-300 px-3" onClick={decreaseCount}>Decrease</button>
            <button className="ml-2 bg-gray-300 px-3" onClick={resetCount}>Reset</button>
            <button className="ml-2 bg-gray-300 px-3" onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default CustomTwo
