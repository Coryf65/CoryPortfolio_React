import React from 'react'
import './contactForm.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
    return navigationLinks.map((e, index) => (
        <p key={index}> <a href={e.ref}>{e.name}</a></p>
    ))
}

function ContactForm() {
    return (
        <div className='contact-container' id='contact'>
            <div className='contact-data-links'>
                <div>
                    <p>Wisconsin</p>
                    <p>Cory Fabian</p>
                    <p>email</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>&copy;{new Date().getFullYear()}</div>
        </div>
    )
}

export default ContactForm
