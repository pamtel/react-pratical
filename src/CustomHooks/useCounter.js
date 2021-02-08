import {useState} from 'react'


const useCounter = (initialState = 0, step = 1) => {
    const [count, setCount] = useState(initialState, step)
    const increaseCount = () => {
        setCount(count + step)
    }

    const decreaseCount = () => {
        setCount(count - step)
    }

    const resetCount = () => {
        setCount(0)
    }
    return {count, increaseCount, decreaseCount, resetCount}
}
export default useCounter;



