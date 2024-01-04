import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
    const [showEmail, setShowEmail] = useState({bookings: false});

    return (
        <div className="contactContainer">
            <section>
                <h1 className='contactTitle'>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, bookings: !showEmail.bookings})}>Bookings</a>
                </h1>
                {showEmail.bookings && <div className='email'>sheisaenes@gmail.com</div>}
            </section>
        </div>
    )
}
