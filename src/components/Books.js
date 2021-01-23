import React, { useState } from 'react';

function Book({src, title, price, author}) {
  
   let [dayTime, setDayTime] =  useState("morning");
   
   console.log(dayTime);
//   const {src, title, price, author} = props;
    // function logOut(){
    //     alert("Logging out");
    // }

    function changeText(){
        setDayTime("afternoon")
    }
    return(
<div>
    <h3>{dayTime}</h3>
        <img src={src} />
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{price}</p>
        <button onClick={changeText}>Change</button>
</div>
)
}

export default  Book;