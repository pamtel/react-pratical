import React from 'react';
import './contact.css'

function ContactCard({details}) {
    return(
        <div className='container'>
            <img src={details.img}></img>
            <h3>{details.name}</h3>
            <p>{details.phone}</p>
            <p>{details.email}</p>
        </div>
    )
}

export default ContactCard;