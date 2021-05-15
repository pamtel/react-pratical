import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw, collectInterest, deleteAccount, toggleAccount } from "../actions/bankingActions";

function Banking() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch()

  const handleDeposit = () => {
      dispatch(deposit(amount))
  };

  const handleWithdraw = () => {
    dispatch(withdraw(amount))
  };

  const handleCollectInterest = () => {
    dispatch(collectInterest())
  };

  const handleDelete = () => {
    dispatch(deleteAccount())
  };

  const handleAccountChange = () => {
    dispatch(toggleAccount())
  };

  return (
    <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          className="border border-gray-600 w-80"
        />
        <br />
        <button
          onClick={handleDeposit}
          className="bg-green-600 px-4 py-1 rounded text-white"
        >
          Deposit
        </button>
        <button
          onClick={handleWithdraw}
          className="bg-blue-500 px-4 py-1 rounded text-white"
        >
          Withdraw
        </button>
        <button
          onClick={handleCollectInterest}
          className="bg-yellow-300 px-4 py-1 rounded"
        >
          Collect Interest
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-1 rounded text-white"
        >
          Delete Account
        </button>
        <button
          onClick={handleAccountChange}
          className="bg-gray-600 px-4 py-1 rounded text-white"
        >
          Change Account Type
        </button>
    </div>
  );
}

export default Banking;
