// import React, {useState, useEffect, useRef} from 'react'
import UseEffectFetch from './UseEffectFetch';

function App() {
    // const [count, setCount] = useState(0)
    // const inputRef = useRef();
    // console.log(inputRef);
    // const textRef = useRef();
    // useEffect(() => {
    //     inputRef.current.focus()
    //     document.title = `Count is ${count}`;
    //     console.log("UseEffect has logged");
    // }, []);
    // console.log("Render method has logged");
    // const focusInput = () => {
    //     // inputRef.current.focus();
    //     textRef.current.style.color = 'red'
    // }

    const hello = 'hello world';
    function getName(name) {
        console.log(name);
    }
    
    return (
        <div>
            <Greeting usergreeting={hello} getUserName={getName} />
            {/* <UseEffectFetch/> */}
        </div>
        // <div>
        //     <input type="text" ref={inputRef}/>
        //    <p ref={textRef}>You clicked on the button {count} times</p> 
        //    <button onClick={() => setCount(count + 1)}>Increase</button>
        //    <button onClick={() => focusInput()}>Focus Input</button>
        // </div>
    )
}

const Greeting = ({usergreeting, getUserName}) => {
    return (
        <div>
           {usergreeting}
        </div>
    )
}

export default App
