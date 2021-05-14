import React from 'react'

function Banking() {
    return (
        <div>
            <form action="">
                <input type="text" className="border border-gray-600 w-80"/><br />
                <button className="bg-green-600 px-4 py-1 rounded text-white">Deposit</button>
                <button className="bg-blue-500 px-4 py-1 rounded text-white">Withdraw</button>
                <button className="bg-yellow-300 px-4 py-1 rounded">Collect Interest</button>
                <button className="bg-red-600 px-4 py-1 rounded text-white">Delete Account</button>
                <button className="bg-gray-600 px-4 py-1 rounded text-white">Change Account Type</button>
            </form>
        </div>
    )
}

export default Banking
