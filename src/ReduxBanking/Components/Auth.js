import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAuth } from '../actions/bankingActions';

function Auth() {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()

    const handleAuth = () => {
        dispatch(toggleAuth())
    }
    return (
        <div>
            <button onClick={handleAuth} className="bg-blue-300 px-4 py-2 rounded">{auth.isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Auth
