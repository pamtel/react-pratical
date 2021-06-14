import React from 'react';
// import Header from './components/Header';
// import Greeting from './components/Greeting';
// import Footer from './components/Footer';
import Counter from './Counter'

function GreetingApp() {
    return (
        <div className="greetingApp">
            {/* <Header/> */}
            {/* <Greeting/> */}
            {/* <Footer/> */}
            <Counter count={10} />
        </div>
    )
}



export default GreetingApp;