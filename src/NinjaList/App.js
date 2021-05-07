import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Footer from './pages/footer'
import Header from './pages/header'
import  NinjaList from './pages/ninja-list'
import SingleNinja from "./pages/singleNinja";
import reducer from "./reducer";

const initialState = {
    ninjas: [],
    isLoading: true,
    isError: false,
    singleNinja: {
        name:"",
        address:{city:"", street:"",suite:"",zipcode:""},
        company:{name:""},
        email:"",
        website:"",
        username:"",
        phone: "",
    },
}

export const AppContext = createContext(null)

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <BrowserRouter>
            <AppContext.Provider value={[state, dispatch]}>
            <div className="px-3 py-2 md:px-11 text-lg text-gray-500 bg-gray-100 md:h-screen">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/ninjas">
                        <NinjaList/>
                    </Route>

                    <Route path="/ninjas/:id">
                        <SingleNinja/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

export default App
