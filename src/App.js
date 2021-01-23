import React from 'react'
import Book from './components/Books'
import pics1 from './assets/images/clock.png'
import pics2 from './assets/images/laptop.png'
import pics3 from './assets/images/umbrella.png'

function App() {
    return (
        <div>
            
            <Book
            src={pics1}
            title="I love you to the moon and back"
            author="Amelia Hepworth"
            price="$5.00"
            />
            
            <Book
            src={pics2}
            title="Married Again"
            author="Pragya Arora"
            price="$7.00"
            />
            
            <Book
            src={pics3}
            title="Wedding Party"
            author="Mike esuroye"
            price="$10.00"
            />
            
        </div>
    )
}
export default App;