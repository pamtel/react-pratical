import React from 'react'
import App from './App'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { bankingReducer } from './reducers/bankingReducers'

const store = createStore(bankingReducer)

function AppBanking() {
    return (
        <Provider store={store}>
            <div>
                <App/>
            </div>
        </Provider>
    )
}

export default AppBanking
