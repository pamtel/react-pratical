import {useState} from 'react'
import Modal from './Modal'
import Question from './Question'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const changeButton = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    // const logInButton = () => {
    //     setIsLoggedIn(!isLoggedIn)
    // }
    return (
        <div>
            {/* <Greeting isLoggedIn={isLoggedIn}/>
            <Notification msgs={[1,2,3]} />
            <button onClick={changeButton}>Switch button</button>
            <button onClick={changeButton}>{isLoggedIn ? "Login":"sign up"}</button> */}
            {/* <Modal/> */}
            <Question/>
        </div>
    )
}



const Notification = ({msgs}) => {
    return (
        <div>
            <h3>Hello Pamela</h3>
            {msgs.length > 0 && <p>You have {msgs.length} unread messages</p>}
        </div>
    )
}


const Greeting = ({isLoggedIn}) => {
    // if(isLoggedIn === true){
    //     return (
    //         <h1>Welcome Back</h1>
    //     )
    // }
    // return(
    //     <h1>Sign up</h1>
    // )

//     let greetingText;

//     if(isLoggedIn === true){
//         greetingText = "Welcome Back";
// } else {
//     greetingText = "Sign Up"
// }
return (
    <h1>{isLoggedIn ? "Welcome Back" : "Sign Up"}</h1>

)
}

export default App
