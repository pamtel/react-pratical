import { useState } from "react";
const defaultCount = 0;
function Counter() {
    const [count, setCount] = useState(defaultCount);
    const increaseCount = () => {
        setCount(count + 1);
    }
    const resetCount = () => {
       setCount(defaultCount)
    }
    const decreaseCount = () => {
        if (count <= 0) {
            setCount(0); 
        } else {
            setCount(count - 1);
        }
    }

   

    return (
        <div style={{textAlign: "center"}}>
            <h2>{count}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decreaseCount}>Decrease</button>
        </div>
    )
}

export default Counter;