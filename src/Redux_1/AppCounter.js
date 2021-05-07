import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { loggedIn } from "./actions/isLoggedInAction";

function AppCounter() {
  const counter = useSelector((state) => state.count);
  const isLoggedIn = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1 className="text-4xl">Our App</h1>
        <p className="mt-5">Counter: {counter}</p>
        <div className="mt-5">
          <button
            className="border mx-2 px-5"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            className="border mx-2 px-5"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
      <div>
        {!isLoggedIn ? (
          <button
            className="mt-5 border border-blue-900 hover:bg-blue-900 hover:text-white px-5 py-2"  
            onClick={() => dispatch(loggedIn())}
          >
            Login
          </button>
        ) : (
          <div className="mt-5">
            <p>You are logged in</p>
            <button
              className="mt-5 border border-red-600 px-5 py-2 hover:bg-red-600 hover:text-white"
              onClick={() => dispatch(loggedIn())}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppCounter;
