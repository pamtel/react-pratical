import React, { useState } from 'react'
import Persons from './Correction'
// Create a component called Persons
    //render the Persons component in your Testing component 
    // It should render 3 Person component
    // Each Person component should return a name in h3 and a button with the text "Hide"
    // Pass in the different names as prop
    // IN your Person component, create a state to hold the button text which is "Hide"
    // display the content of the state in the button.
    //when the button is clicked on, change the text to "Show"
    // add an inline styling to the h3
    // when the button is clicked, hide the h3
function Testing(){
    return(
        <div>
            <Persons />
            {/* <Persons name="Chizzy"/>
            <Persons name="Juliet"/>
            <Persons name="Jennifer"/> */}
        </div>
    )
}

    const styles = {
        color: "red",
        fontSize: "20px",
    }
function Persons(props){
    const [toggle,setToggle ] =  useState(true);
    function changeText(){ 
       if (toggle) {
           setToggle(false)
       }else{
           setToggle(true)
       }
    }
   
    return (
        <div>
            <h3 style={styles}>{props.name}</h3>
            {toggle&&Testing()}
            <button onClick={changeText}>{toggle?'Hide':'Show'}</button>
        </div>
    )
}

export default Testing;