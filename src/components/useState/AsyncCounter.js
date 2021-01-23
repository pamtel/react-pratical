import { useState } from 'react'

function AsyncCounter() {
    const [count, setCount] = useState(0);
    const increaseCounter =() => {
        setTimeout(() => {
            setCount((prevCount) => {
               return  prevCount + 1
            })
        }, 2000)
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{count}</h2>
            <button onClick={increaseCounter}>IncreaseCountAfter2Secs</button>
        </div>
    )
}

export default AsyncCounter
