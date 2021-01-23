import React from 'react';
import ContactCard from './components/ContactCard';
import pics1 from './assets/images/clock.png'
import pics2 from './assets/images/laptop.png'
import pics3 from './assets/images/umbrella.png'

function  ContactApp() {
    return (
        <div className="div-container">
            <ContactCard
            img={pics1}
            name="Thomas Ahiante"
            phone="07036648787"
            email="thomasahiante@gmail.com"
            />
            <ContactCard
            img={pics2}
            name="Johnson Felix"
            phone="09057998956"
            email="johnsonfelix@gmail.com"
            />
            <ContactCard
            img={pics3}
            name="Akos Ojah"
            phone="08183130278"
            email="akosOjah@gmail.com"
            />
        </div>
    )
}

export default ContactApp;