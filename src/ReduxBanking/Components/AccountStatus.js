import React from 'react'
import { useSelector } from 'react-redux'

function AccountStatus() {
    const isSavingsAccount = useSelector((state) => state.banking.isSavingsAccount)
    return (
        <div>
            <h1 className="text-5xl">{isSavingsAccount ? "Savings Account" : "Current Account"}</h1>
        </div>
    )
}

export default AccountStatus
