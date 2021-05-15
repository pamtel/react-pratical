import React from 'react'
import { useSelector } from 'react-redux'

function Balance() {
    const balance = useSelector((state) => state.banking.balance);
    
    return (
        <div>
             <h1 className="text-2xl">#{balance}</h1>
        </div>
    )
}

export default Balance
