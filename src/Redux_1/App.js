import React from 'react'
import { createStore } from 'redux' 
import { Provider } from "react-redux";
import JoinedReducers from "./reducers";
import AppCounter from './AppCounter';

const store = createStore(JoinedReducers);

function App() {

    return (
        <Provider store={store}>
        <div className="text-center mt-5">
            <AppCounter />
        </div>
        </Provider>
    )
}

export default App
