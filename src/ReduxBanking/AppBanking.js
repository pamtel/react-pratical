import React from 'react'
import App from './App'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from './reducers/combineReducer'

const store = createStore(rootReducer)

function AppBanking() {
    return (
        <Provider store={store}>
            <div className="w-full">
                <App/>
            </div>
        </Provider>
    )
}

export default AppBanking
