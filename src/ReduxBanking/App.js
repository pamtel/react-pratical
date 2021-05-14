import React from 'react'
import AccountStatus from './Components/AccountStatus'
import Auth from './Components/Auth'
import Balance from './Components/Balance'
import Banking from './Components/Banking'

function App() {
    return (
        <div className="container ml-44 mt-5">
            <Auth />
            <Balance />
            <Banking />
            <AccountStatus />
        </div>
    )
}

export default App
