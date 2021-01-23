import React from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import Footer from './components/Footer';

function GreetingApp() {
    return (
        <div className="greetingApp">
            <Header/>
            <Greeting/>
            <Footer/>
        </div>
    )
}



export default GreetingApp;