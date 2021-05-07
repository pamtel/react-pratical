import Home from './home'
import About from './about'
import Contact from './contact'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                {/* <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/> */}
            
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

                <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/contact">
                    <Contact/>
                </Route>

                <Route path="/:id">
                    <h1 className="font-bold">404!! page NOT FOUND</h1>
                </Route>
                </Switch>



                
            </div>
        </Router>
    )
}

export default App
