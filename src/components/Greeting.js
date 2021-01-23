// import React from 'react'; no longer neccessary before one can use jsx
import './contact.css'

const styles = {
    color: "blue", 
    fontSize: "2rem",
    background: "pink"
}

function Greeting() {
    const time = 12;
    let greeting = "";
    if(time < 12) {
         greeting =  "Morning";
        styles.color = "blue"
    } else if(time < 17) {
        greeting = "Afternoon";
        styles.color = "red"
    }else{
        greeting = "Evening";
        styles.color = "yellow"
    }

    
 return (
     <div>
         <p style={styles}>Good {greeting}</p>
     </div>
 )
}
export default Greeting;